using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contracts;
using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

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
        public ActionResult Post([FromBody] User user)
        {

            try
            {
                var userRegistred = _userRepository.Get(user.Email);

                if(userRegistred != null)
                {
                    return BadRequest("User with this email is alredy registred");
                }

                _userRepository.Add(user);


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
                User userRepository = _userRepository.Get(user.Email, user.Password);


                if(userRepository != null)
                    return Ok(userRepository);

                return BadRequest("Usuário ou senha inválido.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());

            }
        }



    }
}
