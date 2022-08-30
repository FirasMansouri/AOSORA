using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Queries
{
    internal class GetUserQueryHandler : IRequestHandler<GetUserQuery, UserEntity>
    {
        private readonly IUserRepository _userRepository;
        public GetUserQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<UserEntity> Handle(GetUserQuery request, CancellationToken cancellationToken)
        {
            return _userRepository.GetUser(request.id);
        }
    }
}
