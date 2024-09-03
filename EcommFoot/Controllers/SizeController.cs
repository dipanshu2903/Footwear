using EcommFoot.Data;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SizeController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public SizeController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllSize()
        {
            return Ok(dbContext.Sizes.ToList());
        }

        [HttpPost]

        public IActionResult Addsize(Size size)
        {
            var s = new Size()
            {
                SizeId = size.SizeId,
                SizeNo = size.SizeNo,
            };
            dbContext.Sizes.Add(s);
            dbContext.SaveChanges();
            return Ok(s);

        }

    }
}
