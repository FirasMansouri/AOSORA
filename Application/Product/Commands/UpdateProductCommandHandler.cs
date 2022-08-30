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
    internal class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, ProductEntity>
    {
        private readonly IProductRepository _productRepository;
        public UpdateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Task<ProductEntity> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var p = new ProductEntity
            {
                Id = request.Id,
                Name = request.Name,
                //Category = request.Category;
            };
            return _productRepository.UpdateProduct(p);
        }
    }
}
