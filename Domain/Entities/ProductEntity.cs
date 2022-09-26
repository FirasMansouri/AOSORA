using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class ProductEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Discount { get; set; }
        public int Quantity { get; set; }
        public string Color { get; set; }
        public string Images { get; set; }
        public bool IsAvailable { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime UpdateDate { get; set; }    

        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public CategoryEntity Category { get; set; }

        public virtual ICollection<OrderProductEntity> orderProducts { get; set; }
    }

}