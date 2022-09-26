

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class OrderEntity
    {
        public int Id { get; set; }
        public DateTime date { get; set; }
        public bool state { get; set; }
        public virtual ICollection<OrderProductEntity> orderProducts { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual UserEntity User { get; set; }

    }
}
