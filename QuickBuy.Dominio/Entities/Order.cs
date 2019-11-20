

using QuickBuy.Domain.ValueObject;
using System;
using System.Collections.Generic;

namespace QuickBuy.Domain.Entities
{
    public class Order
    {
        public int Id { get; set; }

        public DateTime OrderDate { get; set; }

        public int UserId { get; set; }

        public DateTime DeliveryDate { get; set; }

        public int DeliveryAddressId { get; set; }

        public int FormaPagamentoId { get; set; }

        public PaymentMetod PaymentMetod { get; set; }

        /// <summary>
        /// Pedido deve ter pelo menos um item de pedido
        /// ou muitos itens de peididos
        /// </summary>
        public ICollection<OrderItem> OrderItens { get; set; }



    }
}
