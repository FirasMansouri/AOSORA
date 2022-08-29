using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Application.IRepositories;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Text.Json;
using Infrastructure.Utils;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace Infrastructure.Repositories
{
    public class UserRepository : Repository<UserEntity>, IUserRepository
    {
        private readonly IUtils _utils;
        private readonly ProductContext _context;
        public UserRepository(ProductContext context, IUtils utils) : base(context) 
        {
            _context = context;
            _utils = utils; 
        }

        public async Task<bool> FindEmail(string email)
        {
            var user = _context.Set<UserEntity>().FirstOrDefault(u=>u.email==email);
            if (user == null) { return  false ;  } else { return  true ; }
        }

        public async Task<string> login(string email, string password)
        {
            string response = "";
            string encodedData = _utils.EncryptPwd(password);

            var user = _context.Set<UserEntity>().Include(user=>user.role).FirstOrDefault(u => u.email == email);
            if (user==null)
            {
                response = "email does not exist";
            }
            else if(user.password != encodedData)
            {
                response = "incorrect password";
            }
            else
            {
                user.password = "";
                string token= _utils.GenerateToken(user);
                JsonSerializerOptions options = new()
                {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true
                };
                string jsonResult = JsonSerializer.Serialize(user, options);
                response = jsonResult+","+token;
            }
            return response;

        }

        public async Task<UserEntity> Register(UserEntity entity)
        {
            string encodedData = _utils.EncryptPwd(entity.password);
            
            var role = _context.Roles.Where(r => r.RoleName == "MEMBER").FirstOrDefault();

            var newUser = new UserEntity
            {
                email = entity.email,
                password = encodedData,
                address = entity.address,
                name = entity.name,
                role = role
            };

            await _context.Set<UserEntity>().AddAsync(newUser);
            _context.SaveChanges();
            entity.password = "";

            return entity;

        }
    }
}
