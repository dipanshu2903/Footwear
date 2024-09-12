using EcommFoot.Data;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public ColorController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllColor()
        {
            return Ok(dbContext.Colors.ToList());
        }

        [HttpPost]

        public IActionResult AddColor(AddColor addcolor)
        {
            var c = new Color()
            {
                ColorId = addcolor.ColorId,
                ColorName = addcolor.ColorName,

            };
            dbContext.Colors.Add(c);
            dbContext.SaveChanges();
            return Ok(c);
        }
    }
}
