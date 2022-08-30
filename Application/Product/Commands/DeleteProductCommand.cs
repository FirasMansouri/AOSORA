using MediatR;

namespace Application.Product.Commands
{
    public record class DeleteProductCommand
    (
        int id    
    ):IRequest<bool>;
        
    
}
