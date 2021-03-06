﻿using QuickBuy.Domain.Entities;

namespace QuickBuy.Domain.Entities
{
    public class OrderItem : Entitie
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int Quantity { get; set; }

        public override void Validate()
        {
            if(ProductId == 0)
            {
                AddWarning("Product reference not found.");
            }

            if(Quantity == 0)
            {
                AddWarning("The quantity was not informed.");
            }
        }
    }
}
