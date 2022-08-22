using Application.IRepositories.Base;
using Domain.Entities;
using System.Threading.Tasks;

namespace Application.IRepositories
{
    public interface IUserRepository : IRepository<UserEntity>
    {
        Task<UserEntity> Register(UserEntity entity);
    }
}
