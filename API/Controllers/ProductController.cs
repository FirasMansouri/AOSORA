
using Application.Product.Commands;
using Application.Product.Queries;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("[controller]")]
    [ApiController]
    public class ProductController: ControllerBase
    {
        private readonly IMediator _mediator;
        public ProductController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("Get")]
        [HttpGet]
        public async Task<ProductEntity> GetProduct(int id)
        {
            var query = new GetProductQuery(id);
            return await _mediator.Send(query);
        }



        [Route("Post")]
        [HttpPost]
        public async Task<ActionResult<ProductEntity>> CreateProduct([FromBody] ProductEntity request)
        {
            var command = new AddProductCommand(request.ProductId, request.ProductName, request.ProductCategory);
            var result = await _mediator.Send(command);
            return Ok(result);
        }


        [HttpGet("[action]")]
        public IActionResult test()
        {
            return Ok(new { response = "123", hello = "hello" });
        }

    }
}
