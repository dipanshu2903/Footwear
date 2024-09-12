using EcommFoot.Data;
using EcommFoot.Model;
using EcommFoot.Model.AddDataFld;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public CategoryController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllCategory()
        {
            return Ok(dbContext.categories.ToList());
        }

        [HttpPost]

        public IActionResult AddCate(AddCategory addcate)
        {
            var category = new Category()
            {
                CategoryId = addcate.CategoryId,
                CategoryName = addcate.CategoryName,

            };
            dbContext.categories.Add(category);
            dbContext.SaveChanges();
            return Ok(category);
        }

    }
}
