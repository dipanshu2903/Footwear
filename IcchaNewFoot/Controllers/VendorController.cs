using EcommFoot.Data;
using EcommFoot.Model;
using EcommFoot.Model.AddDataFld;
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

        public IActionResult AddVendor(AddVendorDto addvendor)
        {
          
            var v = new Vendor()
            {
                      VendorId = addvendor.VendorId,
                      FirstName = addvendor.FirstName,
                      LastName = addvendor.LastName,
                      Contact  = addvendor.Contact,
                      Email = addvendor.Email,
                      Address = addvendor.Address,
                      StateId = addvendor.StateId,
                      CityId = addvendor.CityId,
            };
            dbContext.Vendors.Add(v);
            dbContext.SaveChanges();
            return Ok("Success");
        }

        
        
            //if (dbContext.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null)
            //{
            //    //dbContext.Users.Add(user);
            //    return Ok("AlreadyExists");
            //}
            //user.MemberSince = DateTime.Now;
            //dbContext.Users.Add(user);
            //dbContext.SaveChanges();
            //return Ok("Success");
        



    }
}
