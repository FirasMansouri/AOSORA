using Application.IRepositories;
using Application.Product.Commands;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<bool>> post(int userId, [FromBody] List<OrderProductEntity> request )
        {
            if(request != null)
            {
                 await _orderRepository.AddOrder(userId, request);
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<OrderEntity>>> getAll()
        {
            return await _orderRepository.GetAllOrders();
        }
        //public async Task<ActionResult<IEnumerable<OrderEntity>>> getAll()
        //{
        //    return await _orderRepository.GetAllOrders();
        //}
    }
}
