using System.Collections.Generic;

namespace QuickBuy.Domain.Entities
{
    public class User : Entitie
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }

        //# virtual to allow EFCore replace at runtime
        public virtual ICollection<DeliveryAddress> DeliveryAddresses { get; set; }

        public virtual ICollection<Order> Orders { get; set; }

        public override void Validate()
        {
        }
    }
}
