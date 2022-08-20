using Domain.Entities;
using MediatR;
using System;

namespace Application.Product.Commands
{
    public record class AddProductCommand
    (   int ProductId,
        string ProductName,
        string ProductCategory
    ): IRequest<ProductEntity>;
}
