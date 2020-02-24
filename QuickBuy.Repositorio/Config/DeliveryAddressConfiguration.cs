using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;

namespace QuickBuy.Repository.Config
{
    public class DeliveryAddressConfiguration : IEntityTypeConfiguration<DeliveryAddress>
    {
        public void Configure(EntityTypeBuilder<DeliveryAddress> builder)
        {
            if(builder != null)
            {
                builder
                    .HasKey(d => d.Id);

                builder
                    .Property(d => d.PublicPlace)
                    .IsRequired();

                builder
                    .Property(d => d.Number)
                    .IsRequired();

                builder
                    .Property(d => d.CEP)
                    .IsRequired();

                builder
                    .Property(d => d.City)
                    .IsRequired();

                builder
                    .Property(d => d.Country)
                    .IsRequired();

                builder
                    .Property(d => d.Annotation);

                builder
                    .Property(d => d.Province)
                    .IsRequired();

                builder
                    .Property(d => d.Neighborhood)
                    .IsRequired();

            }
        }
    }
}