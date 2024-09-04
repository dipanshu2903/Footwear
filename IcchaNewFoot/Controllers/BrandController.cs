using EcommFoot.Data;
using EcommFoot.Model;
using EcommFoot.Model.AddDataFld;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public BrandController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllBrand()
        {
            return Ok(dbContext.Brands.ToList());
        }

        [HttpPost]

        public IActionResult AddBrand(Brand brand)
        {
            var b = new Brand()
            {
                BrandId = brand.BrandId,
                BrandName = brand.BrandName,
            };
            dbContext.Brands.Add(b);
            dbContext.SaveChanges();
            return Ok(b);

        }

    }
}
