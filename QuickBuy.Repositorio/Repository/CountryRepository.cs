using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repository.Repository
{
    public class CountryRepository : BaseRepository<Country>, ICountryRepository
    {
        public CountryRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }


        
    }
}
