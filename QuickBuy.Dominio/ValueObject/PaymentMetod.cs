using QuickBuy.Domain.Enumerable;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.ValueObject
{
    public class PaymentMetod
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsBillet
        {
            get { return Id == (int)PaymentTypeEnum.Billet; }
        }

        public bool IsCreditCard
        {
            get { return Id == (int)PaymentTypeEnum.CreditCard; }
        }

        public bool IsDeposit
        {
            get { return Id == (int)PaymentTypeEnum.Deposit; }
        }

        public bool IsNotDefined
        {
            get { return Id == (int)PaymentTypeEnum.NotDefined; }
        }
    }
}
