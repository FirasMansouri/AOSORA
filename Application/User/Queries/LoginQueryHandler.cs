using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Queries
{
    internal class LoginQueryHandler : IRequestHandler<LoginQuery, string>
    {
        private readonly IUserRepository _userRepository;
        public LoginQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<string> Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            return _userRepository.login(request.email, request.password);
        }

    }
}
