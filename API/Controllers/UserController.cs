using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.User.Commands;
using Domain.Object_Values;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IMediator _mediator;
        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("register")]
        [HttpPost]
        public async Task<ActionResult<UserEntity>> register([FromBody] UserEntity request)
        {
            var ad = new Address(request.address.City, request.address.Street, request.address.ZipCode);
            var command = new RegisterCommand(request.name, request.email, request.password, ad);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

    }
}
