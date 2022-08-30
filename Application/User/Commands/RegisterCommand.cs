using MediatR;
using Domain.Entities;
using Domain.Object_Values;

namespace Application.User.Commands
{
    public record class RegisterCommand
    (   string name,
        string email,
        string password,
        Address address
        ) : IRequest<UserEntity>;
}
