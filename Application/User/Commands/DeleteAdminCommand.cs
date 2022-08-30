using MediatR;

namespace Application.User.Commands
{
    public record class DeleteAdminCommand
    (
        int id
    ):IRequest<bool>;
}
