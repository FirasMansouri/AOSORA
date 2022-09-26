using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Product.Commands
{
    internal class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, string>
    {
        private readonly IProductRepository _productRepository;
        public UpdateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Task<string> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
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
            return _productRepository.UpdateProduct(p);
        }
    }
}
