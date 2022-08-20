using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Product.Queries
{
    public class GetProductQueryHandler : IRequestHandler<GetProductQuery, ProductEntity>
    {
        private readonly IProductRepository _productRepository;
        public GetProductQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Task<ProductEntity> Handle(GetProductQuery request, CancellationToken cancellationToken)
        {
            return _productRepository.GetByIdAsync(request.ProductId);
        }
    }
}
