using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.ValueObject;
using System;

namespace QuickBuy.Repository.Config
{
    public class PaymentMetodConfiguration : IEntityTypeConfiguration<PaymentMetod>
    {
        public void Configure(EntityTypeBuilder<PaymentMetod> builder)
        {
            throw new NotImplementedException();
        }
    }
}
