using QuickBuy.Domain.Entities;

namespace QuickBuy.Domain.Entities
{
    public class Product : Entitie
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public override void Validate()
        {
        }
    }
}
