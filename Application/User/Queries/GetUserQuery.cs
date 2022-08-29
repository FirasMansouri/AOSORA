using Domain.Entities;
using MediatR;

namespace Application.User.Queries
{
    public record class GetUserQuery
    (
        int id
    ):IRequest<UserEntity>;
}
