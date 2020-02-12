using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class CountryController : Controller
    {
        private readonly ICountryRepository _countryRepository;

        public CountryController(ICountryRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }

        [HttpGet("GetAll")]
        public ActionResult GetAll()
        {
            return Json(_countryRepository.GetAll());
        }
    }
}
