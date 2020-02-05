using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;

namespace QuickBuy.Repository.Config
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            if(builder != null)
            {
                //#Builder Pardão Fluent

                //#Id
                builder
                     .HasKey(user => user.Id);

                //#Email
                builder
                     .Property(user => user.Email)
                     .IsRequired()
                     .HasMaxLength(50);

                //#Password
                builder
                     .Property(user => user.Password)
                     .IsRequired()
                     .HasMaxLength(400);

                //#Name
                builder
                     .Property(user => user.Name)
                     .IsRequired()
                     .HasMaxLength(50);

                //#LastName
                builder
                     .Property(user => user.LastName)
                     .IsRequired()
                     .HasMaxLength(50);

                //#Orders
                builder
                    .HasMany(u => u.Orders)
                    .WithOne(p => p.User);

                //#DeliveryAddress
                //builder
                //    .HasMany(u => u.DeliveryAddresses)
                //    .WithOne(d => d.User);

            }
        }
    }
}
