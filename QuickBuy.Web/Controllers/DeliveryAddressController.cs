using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using QuickBuy.Repository.API;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class DeliveryAddressController : Controller
    {
        private readonly IDeliveryAddressRepository _deliveryAddressRepository;

        public DeliveryAddressController(IDeliveryAddressRepository deliveryAddressRepository)
        {
            _deliveryAddressRepository = deliveryAddressRepository;
        }

        [HttpGet]
        public ActionResult GetAddressesUser([FromBody] int userId)
        {
            try
            {
                return Json(_deliveryAddressRepository.GetAddressesUser(userId));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody]DeliveryAddress deliveryAddress)
        {
            try
            {
                //Validation for DeliveryAdress
                deliveryAddress.Validate();
                if (!deliveryAddress.IsValid)
                    return BadRequest(deliveryAddress.GetMessageValidation());

                _deliveryAddressRepository.Add(deliveryAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

            return Ok();
        }

        [HttpGet("GetByCep")]
        public ActionResult GetByCep(string cep)
        {
            DeliveryAddressApi api = new DeliveryAddressApi();
            try
            {
                Correios.consultaCEPResponse consulta = api.GetByCep(cep);

                if (consulta != null)
                {
                    return Ok(Json(consulta.@return));
                }
                else
                {
                    return BadRequest("Faild to request address.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }


    }
}
