﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class OrderItem
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}
