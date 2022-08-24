using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Application.IRepositories;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Text.Json;

namespace Infrastructure.Repositories
{
    public class UserRepository : Repository<UserEntity>, IUserRepository
    {
        private readonly ProductContext _context;
        public UserRepository(ProductContext context) : base(context) 
        {
            _context = context;
        }

        public async Task<bool> FindEmail(string email)
        {
            var user = _context.Set<UserEntity>().FirstOrDefault(u=>u.email==email);
            if (user == null) { return  false ;  } else { return  true ; }
        }

        public async Task<string> login(string email, string password)
        {
            string response = "";

            byte[] encData_byte = new byte[password.Length];
            encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
            string encodedData = Convert.ToBase64String(encData_byte);

            var user = _context.Set<UserEntity>().FirstOrDefault(u=>u.email==email);
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
                string jsonString = JsonSerializer.Serialize(user);
                response = jsonString;
            }
            return response;

        }

        public async Task<UserEntity> Register(UserEntity entity)
        {
            try
            {
                byte[] encData_byte = new byte[entity.password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(entity.password);
                string encodedData = Convert.ToBase64String(encData_byte);
                entity.password = encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
            await _context.Set<UserEntity>().AddAsync(entity);
            _context.SaveChanges();
            entity.password = "";
            return entity;
        }
    }
}
