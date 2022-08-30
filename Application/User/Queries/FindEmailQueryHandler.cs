using Application.IRepositories;
using Domain.Entities;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Text.Json;


namespace Application.User.Queries
{
    public class FindEmailQueryHandler : IRequestHandler<FindEmailQuery, bool>
    {
        private readonly IUserRepository _userRepository;
        public FindEmailQueryHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<bool> Handle(FindEmailQuery request, CancellationToken cancellationToken)
        {
            return _userRepository.FindEmail(request.email);

        }



    }
}
