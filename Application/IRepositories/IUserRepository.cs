using Application.IRepositories.Base;
using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.IRepositories
{
    public interface IUserRepository : IRepository<UserEntity>
    {
        Task<UserEntity> Register(UserEntity entity);
        Task<string> login(string email, string password);
        Task<bool> FindEmail(string email);
        Task<string> AddAdmin(UserEntity entity);
        Task<bool> DeleteAdmin(int id);
        Task<UserEntity> UpdateAdmin(UserEntity entity);
        Task<UserEntity> GetUser(int id);
        Task<List<UserEntity>> GetAllUsers();

    }
}
