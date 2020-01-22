using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repository.Repository
{
    public class DeliveryAddressRepository : BaseRepository<DeliveryAddress>, IDeliveryAddressRepository
    {
        public DeliveryAddressRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }
        public List<DeliveryAddress> GetAddressesUser(int userId)
        {
            return QuickBuyContext.DeliveryAddresses.Where(w => w.UserId == userId).ToList();
        }
    }
}
