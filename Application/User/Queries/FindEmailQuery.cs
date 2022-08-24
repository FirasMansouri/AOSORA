using MediatR;

namespace Application.User.Queries
{
    public record FindEmailQuery
    (
        string email
    ) : IRequest<bool>;


}
