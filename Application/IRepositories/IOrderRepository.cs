using Application.IRepositories.Base;
using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.IRepositories
{
    public interface IOrderRepository : IRepository<OrderEntity>
    {
        Task<string> AddOrder(int userId, List<OrderProductEntity> orderProducts);
        Task<List<OrderEntity>> GetAllOrders();
        //Task<string> GetAllOrders();

    }
}
