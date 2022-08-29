using Application.IRepositories;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.User.Commands
{
    public class DeleteAdminCommandHandler : IRequestHandler<DeleteAdminCommand, bool>
    {
        private readonly IUserRepository _userRepository;
        public DeleteAdminCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public Task<bool> Handle(DeleteAdminCommand request, CancellationToken cancellationToken)
        {
            return _userRepository.DeleteAdmin(request.id);
        }
    }
}
