
using Application.IRepositories;
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
        private readonly IProductRepository _productRepository;
        public ProductController(IMediator mediator, IProductRepository productRepository)
        {
            _mediator = mediator;
            _productRepository = productRepository;
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
            var command = new AddProductCommand(request.Id,request.Name,request.Description,request.Price,request.Discount,request.Quantity,request.Color,request.Images,request.IsAvailable,request.Category);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpDelete("[action]")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var command = new DeleteProductCommand(id);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<ProductEntity>> Get(int id)
        {
            var query = new GetProductQuery(id);
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<ProductEntity>> Update([FromBody] ProductEntity request)
        {
            var command = new UpdateProductCommand(request.Id, request.Name, request.Description, request.Price, request.Discount, request.Quantity, request.Color, request.Images, request.IsAvailable, request.Category);
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<ProductEntity>>> GetAll()
        {
            return await _productRepository.GetAllProducts();
        }


        [HttpGet("[action]")]
        public IActionResult test()
        {
            return Ok(new { response = "123", hello = "hello" });
        }

    }
}
