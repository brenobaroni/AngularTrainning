using QuickBuy.Dominio.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class DeliveryAddress : Entitie
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string PublicPlace { get; set; }

        public int Number { get; set; }

        public string CEP { get; set; }

        public string Complemento { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public override void Validate()
        {

        }
    }
}
