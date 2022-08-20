using Domain.Entities;
using MediatR;
using System;


namespace Application.Product.Queries
{
    public record GetProductQuery
    (   int ProductId
    ) : IRequest<ProductEntity>;
}
