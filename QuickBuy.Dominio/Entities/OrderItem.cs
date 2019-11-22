using QuickBuy.Dominio.Entities;

namespace QuickBuy.Domain.Entities
{
    public class OrderItem : Entitie
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public override void Validate()
        {
            
        }
    }
}
