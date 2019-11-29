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
                //#Builder Parão Fluent

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
                     .HasMaxLength(50)
                     .HasColumnType("nvarchar");

                //#LastName
                builder
                     .Property(user => user.LastName)
                     .IsRequired()
                     .HasMaxLength(50)
                     .HasColumnType("nvarchar");

                //#LastName
                builder
                     .Property(user => user.LastName)
                     .IsRequired()
                     .HasMaxLength(50)
                     .HasColumnType("nvarchar");

                ////# Orders
                //builder
                //    .Property(user => user.Orders);

                ////#DeliveryAddresses
                //builder
                //     .Property(user => user.DeliveryAddresses)
                //     .IsRequired();
            }




        }
    }
}
