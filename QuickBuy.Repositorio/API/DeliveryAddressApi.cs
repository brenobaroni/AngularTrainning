using System;
using System.Collections.Generic;
using System.Text;
using System.Web.Mvc;

namespace QuickBuy.Repository.API
{
    public class DeliveryAddressApi
    {

        public Correios.consultaCEPResponse GetByCep(string cep)
        {
            Correios.AtendeClienteClient correiosApi = new Correios.AtendeClienteClient();

            Correios.consultaCEPResponse consulta = correiosApi.consultaCEPAsync(cep.Replace("-", "")).Result;


            return consulta;
        }
    }
}
