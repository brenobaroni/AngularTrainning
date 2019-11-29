using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entities;
using QuickBuy.Domain.ValueObject;
using QuickBuy.Repository.Config;

namespace QuickBuy.Repository.Context
{
    public class QuickBuyContext : DbContext
    {
        public QuickBuyContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<DeliveryAddress> DeliveryAddress { get; set; }
        public DbSet<OrderItem> OrderItens { get; set; }
        public DbSet<PaymentMetod> PaymentMetod { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            /// Classes mapping

            if (modelBuilder != null)
            {
                modelBuilder.ApplyConfiguration(new UserConfiguration());
                modelBuilder.ApplyConfiguration(new OrderConfiguration());
                modelBuilder.ApplyConfiguration(new OrderItemConfiguration());
                modelBuilder.ApplyConfiguration(new PaymentMetodConfiguration());
                modelBuilder.ApplyConfiguration(new ProductConfiguration());
                modelBuilder.ApplyConfiguration(new DeliveryAddressConfiguration());
            }

        }

    }
}
