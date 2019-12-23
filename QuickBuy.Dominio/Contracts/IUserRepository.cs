using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Contracts
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User Get(string email, string password);
    }
}
