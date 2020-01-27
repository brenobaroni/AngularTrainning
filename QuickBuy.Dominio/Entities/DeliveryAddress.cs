using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class DeliveryAddress : Entitie
    {
        public int Id { get; set; }

        //User
        public int UserId { get; set; }
        public virtual User User { get; set; }


        //Orders
        //public int OrderId { get; set; }
        //public virtual Order Order { get; set; }
        //public virtual ICollection<Order> Orders { get; set; }


        public string PublicPlace { get; set; }
        public int Number { get; set; }
        public string CEP { get; set; }
        public string Complemento { get; set; }
        public string City { get; set; }
        public string Country { get; set; }


        public override void Validate()
        {
            if (string.IsNullOrEmpty(CEP))
            {
                AddWarning("Warning - CEP is empty");
            }

            if (string.IsNullOrEmpty(PublicPlace))
            {
                AddWarning("Warning - CEP is empty");
            }
        }
    }
}
