
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
    public class ProductsController: ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IProductRepository _productRepository;
        public ProductsController(IMediator mediator, IProductRepository productRepository)
        {
            _mediator = mediator;
            _productRepository = productRepository;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<ProductEntity>> Post([FromBody] ProductEntity request)
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


    }
}
