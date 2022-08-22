using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Commands
{
    internal class RegisterCommandHandler : IRequestHandler<RegisterCommand, UserEntity>
    {
        private readonly IUserRepository _userRepository;

        public RegisterCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<UserEntity> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var u = new UserEntity
            {
                name = request.name,
                email = request.email,
                password = request.password,
                address = request.address
            };

            return _userRepository.Register(u);
        }
    }
}
