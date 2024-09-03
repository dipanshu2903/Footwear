using EcommFoot.Data;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public VendorController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllVendor()
        {
            return Ok(dbContext.Vendors.ToList());
        }

        [HttpPost]

        public IActionResult AddVendor(Vendor vendor)
        {
          
            var v = new Vendor()
            {
                      VendorId = vendor.VendorId,
                      FirstName = vendor.FirstName,
                      LastName = vendor.LastName,
                      Contact  = vendor.Contact,
                      Email = vendor.Email,
                      Address = vendor.Address,
                      StateId = vendor.StateId,
                      CityId = vendor.CityId,
            };
            dbContext.Vendors.Add(v);
            dbContext.SaveChanges();
            return Ok(v);
        }



        
    }
}
