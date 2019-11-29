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
            if (builder != null)
            {
                builder.HasKey(f => f.Id);

                builder
                    .Property(f => f.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                builder
                    .Property(f => f.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            }
        }
    }
}
