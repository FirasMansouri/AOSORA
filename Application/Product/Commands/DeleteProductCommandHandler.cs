using Application.IRepositories;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Product.Commands
{
    internal class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, bool>
    {
        private readonly IProductRepository _productRepository;
        public DeleteProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Task<bool> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            return _productRepository.DeleteAsync(request.id);
        }
    }
}
