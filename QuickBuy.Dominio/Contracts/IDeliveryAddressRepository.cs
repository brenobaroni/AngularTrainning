using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Contracts
{
    public interface IDeliveryAddressRepository : IBaseRepository<DeliveryAddress>
    {
        List<DeliveryAddress> GetAddressesUser(int userId);
    }
}
