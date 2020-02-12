using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repository.Config
{
    public class CountryConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            if (builder != null)
            {
                //#Id
                builder
                    .HasKey(country => country.Id);

                //#Country Code
                builder
                    .Property(country => country.CountryCode)
                    .IsRequired()
                    .HasMaxLength(2);

                //#Country Name
                builder.Property(country => country.CountryName)
                    .IsRequired()
                    .HasMaxLength(60);






            }
        }
    }
}
