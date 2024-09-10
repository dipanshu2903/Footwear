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

        //// POST api/<CategoryVendor>
        [HttpPost]

        public IActionResult AddCate(AddCategory addcate)
        {
            var category = new Category()
            {
                CategoryId = addcate.CategoryId,
                CateName = addcate.CateName,
               
            };
            dbContext.categories.Add(category);
            dbContext.SaveChanges();
            return Ok(category);
        }























        //// PUT api/<CategoryVendor>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<CategoryVendor>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
