using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class ProductEntity
    {
        [Key]
        public int ProductId { get; set; }
        public String ProductName { get; set; }
        public String ProductCategory { get; set; }
    }

}