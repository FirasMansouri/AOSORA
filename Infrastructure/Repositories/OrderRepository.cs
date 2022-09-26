using Application.DTO.Orders;
using Application.IRepositories;
using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class OrderRepository : Repository<OrderEntity>, IOrderRepository
    {
        private readonly IConfiguration _configuration;
        private readonly ProductContext _context;
        public OrderRepository(ProductContext context, IConfiguration configuration) : base(context)
        {
            _context = context;
            _configuration = configuration; 
        }

        public async Task<string> AddOrder(int UserId, List<OrderProductEntity> orderProducts)
        {
            OrderEntity order = new OrderEntity();
            order.UserId= UserId;
            order.date = DateTime.Now;
            await _context.Orders.AddAsync(order);
            _context.SaveChanges();
            int id = order.Id;

            foreach (OrderProductEntity opEntity in orderProducts)
            {
                opEntity.OrderId = order.Id;
                await _context.OrderProducts.AddAsync(opEntity);
            }
            
            _context.SaveChanges();
            return "";
        }

        public async Task<List<OrderEntity>> GetAllOrders()
        {
            var orders = _context.Orders
                                 .Include(o=>o.User)
                                 .Include(o => o.orderProducts)
                                 .ThenInclude(op=>op.product)
                                 .ToList();

            foreach (var order in orders)
            {
                order.User.password = null;
                order.User.role = null;
                order.User.orders = null;
                foreach (var op in order.orderProducts)
                {
                    op.product.orderProducts = null;
                    op.order = null;
                }
            }

            return orders;

        }
    }
}
