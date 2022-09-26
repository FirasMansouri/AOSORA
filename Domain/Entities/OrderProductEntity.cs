

namespace Domain.Entities
{
    public class OrderProductEntity
    {
        public int ProductId { get; set; }
        public virtual ProductEntity product { get; set; }
        public int OrderId {get;set;}
        public virtual OrderEntity order { get; set; }
        public int Quantity { get; set;}    

    }
}
