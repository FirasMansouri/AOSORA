using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Commands
{
    public class UpdateAdminCommandHandler : IRequestHandler<UpdateAdminCommand, UserEntity>
    {
        private readonly IUserRepository _userRepository;
        public UpdateAdminCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public Task<UserEntity> Handle(UpdateAdminCommand request, CancellationToken cancellationToken)
        {
            UserEntity user= new UserEntity();
            user.name = request.name;
            user.email = request.email;
            user.password = request.password;
            user.address = request.address;
            return _userRepository.UpdateAdmin(user);
        }
    }
}
