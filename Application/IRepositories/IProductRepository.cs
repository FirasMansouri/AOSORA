using Domain.Entities;
using Application.IRepositories.Base;

namespace Application.IRepositories
{
    public interface IProductRepository : IRepository <ProductEntity>
    {
        //IEnumerable<Product> GetProductByName(string productName);
    }
}
