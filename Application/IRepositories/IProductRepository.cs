using Domain.Entities;
using System.Threading.Tasks;
using System.Collections.Generic;
using Application.IRepositories.Base;

namespace Application.IRepositories
{
    public interface IProductRepository : IRepository <ProductEntity>
    {
        //IEnumerable<Product> GetProductByName(string productName);
    }
}
