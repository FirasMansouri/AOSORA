using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.IRepositories.Base
{
    public interface IRepository < T > where T: class
    {
         IReadOnlyList<T> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        T UpdateAsync(T entity);
        void DeleteAsync(T entity);
    }
}
