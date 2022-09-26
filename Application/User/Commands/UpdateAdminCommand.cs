using Domain.Entities;
using Domain.Object_Values;
using MediatR;

namespace Application.User.Commands
{
    public record class UpdateAdminCommand
    (
        int id,
        string name,
        string email,
        string password,
        Address address
    ) : IRequest<UserEntity>;
}
