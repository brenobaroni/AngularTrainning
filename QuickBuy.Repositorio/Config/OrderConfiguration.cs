using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            if (builder != null)
            {
                builder.HasKey(p => p.Id);

                builder
                    .Property(p => p.OrderDate)
                    .IsRequired();

                builder
                    .Property(p => p.DeliveryDate)
                    .IsRequired();

                builder
                    .Property(p => p.DeliveryAddressId)
                    .IsRequired();

            }


        }
    }
}
