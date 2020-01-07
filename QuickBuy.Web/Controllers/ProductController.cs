using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;
        private IHttpContextAccessor _httpContextAccessor;
        private IWebHostEnvironment _webHostEnviroment;

        public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IWebHostEnvironment webHostEnvironment)
        {
            _productRepository = productRepository;
            _httpContextAccessor = httpContextAccessor;
            _webHostEnviroment = webHostEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            try
            {
                //Validation for product
                product.Validate();
                if (!product.IsValid)
                    return BadRequest(product.GetMessageValidation());

                //#if productId > 0, the product already exists so it will be an update.
                if (product.Id > 0)
                {
                    _productRepository.Update(product);
                }
                else
                {
                    _productRepository.Add(product);
                }

                return Created("api/product", product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Delete")]
        public IActionResult Delete([FromBody] Product product)
        {
            try
            {
                _productRepository.Remove(product);
                return Json(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("SendArchive")]
        public IActionResult SendArchive()
        {
            try
            {
                IFormFile formFile = _httpContextAccessor.HttpContext.Request.Form.Files["selectedArchive"];
                string archiveName = formFile.FileName;
                string ext = archiveName.Split('.').Last();
                string newArchiveName = CreateNewArchiveName(archiveName, ext);
                string archivesPath = _webHostEnviroment.WebRootPath + "\\archive\\";
                string completeName = archivesPath + newArchiveName;

                using (var streamArchive = new FileStream(completeName, FileMode.Create))
                {
                    formFile.CopyTo(streamArchive);
                }


                return Json(newArchiveName);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        private static string CreateNewArchiveName(string archiveName, string ext)
        {
            char[] arrayNameRipped = Path.GetFileNameWithoutExtension(archiveName).Take(10).ToArray();
            string newArchiveName = new string(arrayNameRipped).Replace(" ", "-");
            newArchiveName = $"{newArchiveName}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{ext}";
            return newArchiveName;
        }







    }
}
