using Application.IRepositories.Base;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Repositories.Base
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private ProductContext _context;

        public Repository(ProductContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            _context.SaveChanges();
            return entity;
        }

        public void DeleteAsync(T entity)
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public IReadOnlyList<T> GetAllAsync()
        {
            throw new System.NotImplementedException();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            T entity = await _context.Set<T>().FindAsync(id);
            _context.SaveChanges();
            return entity;
        }

        public T UpdateAsync(T entity)
        {
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
            return entity;
        }
    }
}