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

        public async Task<bool> DeleteAsync(int id)
        {
            T e = await _context.Set<T>().FindAsync(id);
            if (e == null)
            {
                return false;
            }
            else
            {
                _context.Set<T>().Remove(e);
                _context.SaveChanges();
                return true;
            }           
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            throw new System.NotImplementedException();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            T entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                return null;
            }
            else
            {
                return entity;
            }
        }

        public async Task<T> UpdateAsync(T entity)
        {
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
            return entity;
        }
    }
}