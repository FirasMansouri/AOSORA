using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.User.Commands;
using Domain.Object_Values;
using Application.User.Queries;
using System.Text.Json;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Application.IRepositories;

namespace API.Controllers
{
    //[Authorize(Roles = "MEMBER,ADMIN,SUPER-ADMIN")]
    [Route("[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IMediator _mediator;
        private readonly IUserRepository _userRepository;
        public UsersController(IMediator mediator, IUserRepository userRepository)
        {
            _mediator = mediator;
            _userRepository = userRepository;
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


        //admins management
        [Route("Admins/post")]
        [HttpPost]
        public async Task<ActionResult<int>> AddAdmin([FromBody] UserEntity request)
        {
            var ad = new Address(request.address.City, request.address.Street, request.address.ZipCode);
            var command = new AddAdminCommand(request.name, request.email, request.password, ad);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [Route("Admins/delete")]
        [HttpDelete]
        public async Task<ActionResult<bool>> DeleteAdmin(int id)
        {
            var command = new DeleteAdminCommand(id);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [Route("Admins/get")]
        [HttpGet]
        public async Task<ActionResult<UserEntity>> GetUser(int id)
        {
            var query = new GetUserQuery(id);
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [Route("Admins/put")]
        [HttpPut]
        public async Task<ActionResult<UserEntity>> UpdateAdmin([FromBody] UserEntity request)
        {
            var ad = new Address(request.address.City, request.address.Street, request.address.ZipCode);
            var command = new UpdateAdminCommand(request.UserId,request.name, request.email, request.password, ad);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [Route("getAll")]
        [HttpGet]
        public async Task<ActionResult<List<UserEntity>>> ListUsers()
        {
            return await _userRepository.GetAllUsers();
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
