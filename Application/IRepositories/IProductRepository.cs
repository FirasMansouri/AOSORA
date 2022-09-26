using Application.IRepositories.Base;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain.Entities;

namespace Application.IRepositories
{
    public interface IProductRepository : IRepository <ProductEntity>
    {
        Task<string> AddProduct(ProductEntity product);
        Task<List<ProductEntity>> GetAllProducts();
        Task<string> UpdateProduct(ProductEntity product);
    }
}
