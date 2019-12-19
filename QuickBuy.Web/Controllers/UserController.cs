using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            try
            {


                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
               
            }
        }


        [HttpPost]
        public ActionResult Post()
        {
            try
            {


                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());

            }
        }


        [HttpPost("CheckUser")]
        public ActionResult CheckUser([FromBody] User user)
        {
            try
            {
                 if(user.Email == "teste@teste.com" && user.Password == "123Senha")
                {
                    return Ok(user);
                }

                return BadRequest("Usuário ou senha inválido.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());

            }
        }



    }
}
