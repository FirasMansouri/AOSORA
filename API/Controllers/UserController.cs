using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.User.Commands;
using Domain.Object_Values;
using Application.User.Queries;
using System.Text.Json;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

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

        [Route("login")]
        [HttpGet]
        public async Task<ActionResult<UserEntity>> login(string email, string password)
        {
            var query = new LoginQuery(email, password);
            var result =await _mediator.Send(query);
            return Ok(result);
        }

        [Route("Email")]
        [HttpGet]
        public async Task<ActionResult<UserEntity>> FindEmail(string email)
        {
            var query = new FindEmailQuery(email);
            var result = await _mediator.Send(query);
            return Ok(result);
        }





        //test usefull endpoints
        [HttpGet("Admins")]
        [Authorize(Roles ="ADMIN")] 
        public IActionResult AdminsEndpoint()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                var UserClaims = identity.Claims;
                var name = UserClaims.FirstOrDefault(o => o.Type == ClaimTypes.Name)?.Value;
                var role = UserClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value;
                return Ok($"hi {name},you are an {role}");
            }
            
            return null;
        }

    }
}
