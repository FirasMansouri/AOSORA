using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Queries
{
    internal class LoginQueryHandler : IRequestHandler<LoginQuery, UserEntity>
    {
        private readonly IUserRepository _userRepository;
        public LoginQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        Task<UserEntity> IRequestHandler<LoginQuery, UserEntity>.Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            return _userRepository.login(request.id);
        }
    }
}
