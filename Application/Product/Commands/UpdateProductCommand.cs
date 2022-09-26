using Domain.Entities;
using MediatR;

namespace Application.Product.Commands
{
    public record class UpdateProductCommand
    (   
        int Id,
        string Name,
        string Description,
        decimal Price,
        int Discount,
        int Quantity,
        string Color,
        string Images,
        bool IsAvailable,
        CategoryEntity Category
    ): IRequest<string>;
}
