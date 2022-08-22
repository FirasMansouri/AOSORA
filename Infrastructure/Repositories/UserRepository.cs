using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Application.IRepositories;
using System.Threading.Tasks;
using System;

namespace Infrastructure.Repositories
{
    public class UserRepository : Repository<UserEntity>, IUserRepository
    {
        private readonly ProductContext _context;
        public UserRepository(ProductContext context) : base(context) 
        {
            _context = context;
        }

        public async Task<UserEntity> login(int id)
        {
            UserEntity entity = await _context.Set<UserEntity>().FindAsync(id);

            var encodedData = entity.password;
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            entity.password = result;

            return entity;
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
