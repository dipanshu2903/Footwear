using EcommFoot.Data;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCateController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public SubCateController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllSubCate()
        {
            return Ok(dbContext.SubCategories.ToList());
        }

        [HttpPost]

        public IActionResult AddSubCate(AddSubCate addsubcate)
        {

            var sub = new SubCategory()
            {
                SubCategoryId = addsubcate.SubCategoryId,
                SubCategoryName = addsubcate.SubCategoryName,
                Description = addsubcate.Description,
                CategoryId = addsubcate.CategoryId,
                BrandId = addsubcate.BrandId


            };
            dbContext.SubCategories.Add(sub);
            dbContext.SaveChanges();
            return Ok(sub);
        }
    }
}
