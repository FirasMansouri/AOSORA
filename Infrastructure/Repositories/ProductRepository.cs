using Domain.Entities;
using Application.IRepositories;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Infrastructure.Repositories
{
    public class ProductRepository : Repository<ProductEntity>, IProductRepository
    {
        private readonly ProductContext _context;
        public ProductRepository(ProductContext context) : base(context)
        {
            _context = context;
        }

        public async Task<string> AddProduct(ProductEntity product)
        {
            var category = _context.Categories.Where(c => c.Name == product.Category.Name).FirstOrDefault();
            var newProduct = new ProductEntity
            {
                Name = product.Name,
                Category = category,
                Price = product.Price,
                Quantity = product.Quantity,
                Color = product.Color,
                Discount = product.Discount,
                Description = product.Description,
                IsAvailable = product.IsAvailable,
                Images = product.Images
            };
            await _context.Set<ProductEntity>().AddAsync(newProduct);
            _context.SaveChanges();

            JsonSerializerOptions options = new()
            {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true
            };
            string jsonResult = JsonSerializer.Serialize(newProduct, options);

            return jsonResult;
        }

        public async Task<List<ProductEntity>> GetAllProducts()
        {
            List<ProductEntity> list = _context.Set<ProductEntity>().ToList();
            return list;
            
        }

        public async Task<ProductEntity> UpdateProduct(ProductEntity product)
        {
            ProductEntity productToUpdate = _context.Set<ProductEntity>().Where(p=>p.Id==product.Id).FirstOrDefault();
            if (productToUpdate != null)
            {
                productToUpdate.Name = product.Name;
                productToUpdate.Category = product.Category;
                productToUpdate.Price = product.Price;
                productToUpdate.Quantity = product.Quantity;
                productToUpdate.Color = product.Color;
                productToUpdate.Discount = product.Discount;
                productToUpdate.Description = product.Description;
                productToUpdate.IsAvailable = product.IsAvailable;
                productToUpdate.Images = product.Images;
                _context.Update(productToUpdate);
                _context.SaveChanges();

                return productToUpdate;
            }
            else
            {
                return null;
            }
        }
    }
}
