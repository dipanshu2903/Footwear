using EcommFoot.Data;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public CityController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

      
        [HttpGet]
        public IActionResult GetAllCity()
        {
            return Ok(dbContext.Cities.ToList());
        }


        [HttpPost]

        public IActionResult AddCity(AddCityDto addCity)
        {

            var c = new City()
            {
                Id = addCity.Id,
                CityName = addCity.CityName,
                StateId = addCity.StateId,
          
            };
            dbContext.Cities.Add(c);
            dbContext.SaveChanges();
            return Ok(c);
        }
    }
}
