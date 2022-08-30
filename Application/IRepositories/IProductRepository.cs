using Domain.Entities;
using Application.IRepositories.Base;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Application.IRepositories
{
    public interface IProductRepository : IRepository <ProductEntity>
    {
        Task<string> AddProduct(ProductEntity product);
        Task<List<ProductEntity>> GetAllProducts();
        Task<ProductEntity> UpdateProduct(ProductEntity product);
    }
}
