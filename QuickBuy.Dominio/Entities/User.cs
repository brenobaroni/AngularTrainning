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

        public List<DeliveryAddress> DeliveryAddresses { get; set; }

        public ICollection<Order> Orders { get; set; }

        public User()
        {
            DeliveryAddresses = new List<DeliveryAddress>();
        }

        public override void Validate()
        {
        }
    }
}
