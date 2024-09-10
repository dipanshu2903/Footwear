using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommFoot.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public StateController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllState()
        {
            return Ok(dbContext.States.ToList());
        }

        //// POST api/<StateVendor>
        [HttpPost]

        public IActionResult AddStateVen(AddState addstate)
        {
            var state = new State()
            {
                Id = addstate.Id,
                StateName = addstate.StateName,

            };
            dbContext.States.Add(state);
            dbContext.SaveChanges();
            return Ok(state);
        }


    }
}
