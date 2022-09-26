using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
namespace Application.Product.Commands
{
    public class AddProductCommandHandler : IRequestHandler<AddProductCommand, string>
    {
        private readonly IProductRepository _productRepository;

        public AddProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public Task<string> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            var p = new ProductEntity
            {
                Id = request.Id,
                Name = request.Name,
                Description = request.Description,
                Price = request.Price,
                Discount = request.Discount,
                Quantity = request.Quantity,
                Color = request.Color,
                Images = request.Images,
                IsAvailable = request.IsAvailable,
                Category = request.Category
        };

            return _productRepository.AddProduct(p);
        }
    }
}
