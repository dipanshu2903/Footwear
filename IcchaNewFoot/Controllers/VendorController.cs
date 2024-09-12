using EcommFoot.Data;
using EcommFoot.Model;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model.dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet ("all")]
        public IActionResult GetAllVendor()
        {
            return Ok(dbContext.Vendors.ToList());
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetVendorDto>>> GetVendor()
        {
            var vendors = await dbContext.Vendors.Include(x => x.State)
                                             .Include(x => x.City)
                                             .ToListAsync();
            var v = vendors.Select(x => new GetVendorDto
            {
                VendorId = x.VendorId,
                StateName = x.State.StateName,
                CityName = x.City.CityName,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Contact = x.Contact,
                Email = x.Email,
                Address = x.Address,

            }).ToList();
            return Ok(v);
        }

        [HttpPost]
        public IActionResult AddVendor(AddVendorDto addvendor)
        {

            var v = new Vendor()
            {
                VendorId = addvendor.VendorId,
                FirstName = addvendor.FirstName,
                LastName = addvendor.LastName,
                Contact = addvendor.Contact,
                Email = addvendor.Email,
                Address = addvendor.Address,
                StateId = addvendor.StateId,
                CityId = addvendor.CityId
            };
            dbContext.Vendors.Add(v);
            dbContext.SaveChanges();
            return Ok("Success");
        }

        [HttpDelete("{VendorId}")]
        public async Task<IActionResult> DeleteVendor(int VendorId)
        {
            var vendor = await dbContext.Vendors.FindAsync(VendorId);
            if (vendor == null)
            {
                return NotFound(new { Message = "Product not found" });
            }
            dbContext.Vendors.Remove(vendor);
            await dbContext.SaveChangesAsync();
            return Ok(new { Message = "vendor deleted successfully" });
        }

    }
}


