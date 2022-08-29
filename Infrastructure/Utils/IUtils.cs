using Domain.Entities;

namespace Infrastructure.Utils
{
    public interface IUtils
    {
        public string EncryptPwd(string password);
        public string DecryptPwd(string EncryptedPwd);
        public string GenerateToken(UserEntity user);
    }
}
