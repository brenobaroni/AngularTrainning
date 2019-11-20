using QuickBuy.Domain.Entities;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }



    }
}
