using Domain.Entities;
using MediatR;

namespace Application.User.Queries
{
    public record LoginQuery
    (
        int id
    ) : IRequest<UserEntity>;
}
