

using QuickBuy.Domain.ValueObject;
using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Domain.Entities
{
    public class Order : Entitie
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int DeliveryAddressId { get; set; }
        public virtual DeliveryAddress DeliveryAddress { get; set; }

        public DateTime OrderDate { get; set; }
        public DateTime DeliveryDate { get; set; }
        public int PaymentMetodId { get; set; }
        public virtual PaymentMetod PaymentMetod { get; set; }

        /// <summary>
        /// Pedido deve ter pelo menos um item de pedido
        /// ou muitos itens de peididos
        /// </summary>
        public virtual ICollection<OrderItem> OrderItens { get; set; }
        public override void Validate()
        {
            if (!OrderItens.Any())
            {
                ClearMessageValidation();
                AddWarning("Warning - Order item cannot be empty");
            }

            if(DeliveryAddressId == 0)
            {
                AddWarning("Warning - Not any Delivery address.");
            }


        }
    }
}
