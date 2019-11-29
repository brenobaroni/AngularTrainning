using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            if(builder != null)
            {
                builder.HasKey(i => i.Id);
                    
                builder
                    .Property(i => i.ProductId)
                    .IsRequired();

                builder
                    .Property(i => i.Quantity)
                    .IsRequired();



                
            }
        }
    }
}
