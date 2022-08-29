using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Commands
{
    public class AddAdminCommandHandler : IRequestHandler<AddAdminCommand, string>
    {
        private readonly IUserRepository _userRepository;
        public AddAdminCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<string> Handle(AddAdminCommand request, CancellationToken cancellationToken)
        {
            UserEntity user = new UserEntity();
            user.name = request.name;
            user.email = request.email;
            user.password = request.password;
            user.address = request.address;
            return _userRepository.AddAdmin(user);
        }
    }
}
