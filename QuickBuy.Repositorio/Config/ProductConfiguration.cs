using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            if (builder != null)
            {
                builder.HasKey(p => p.Id);

                builder
                    .Property(p => p.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                builder
                    .Property(p => p.Description)
                    .IsRequired()
                    .HasMaxLength(400);

                builder
                    .Property(p => p.Price)
                    .IsRequired();


            }

        }
    }
}
