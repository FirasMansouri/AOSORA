using Domain.Entities;
using MediatR;

namespace Application.User.Queries
{
    public record LoginQuery
    (
        string email,
        string password
    ) : IRequest<string>;
}
