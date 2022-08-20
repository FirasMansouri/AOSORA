using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
namespace Application.Product.Commands
{
    public class AddProductCommandHandler : IRequestHandler<AddProductCommand, ProductEntity>
    {
        private readonly IProductRepository _productRepository;

        public AddProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public Task<ProductEntity> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            var p = new ProductEntity
            {
                ProductId = request.ProductId,
                ProductName = request.ProductName,
                ProductCategory = request.ProductCategory
            };

            return _productRepository.AddAsync(p);
        }
    }
}
