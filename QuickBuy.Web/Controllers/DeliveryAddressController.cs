using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
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
        public ActionResult Post([FromBody] DeliveryAddress deliveryAddress)
        {
            try
            {
                _deliveryAddressRepository.Add(deliveryAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

            return Ok();
        }


    }
}
