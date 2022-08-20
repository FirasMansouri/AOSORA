using Domain.Entities;
using Application.IRepositories;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;


namespace Infrastructure.Repositories
{
    public class ProductRepository : Repository<ProductEntity>, IProductRepository
    {
        public ProductRepository(ProductContext context) : base(context)
        {
        }


    }
}
