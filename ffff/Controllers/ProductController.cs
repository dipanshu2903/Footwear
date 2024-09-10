using EcommFoot.Data;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EcommFoot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly VendorDbContext dbContext;

        public ProductController(VendorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllProduct()
        {
            return Ok(dbContext.Products.ToList());
        }

        [HttpPost]

        public IActionResult AddProduct(AddProduct addproduct)
        {

            var p = new Product()
            {
                ProductId = addproduct.ProductId,
                ProductName = addproduct.ProductName,
                SubCategoryId = addproduct.SubCategoryId,
                Description = addproduct.Description,
                ImageUrl = addproduct.ImageUrl,
                CreatedDate = addproduct.CreatedDate,
                UpdatedDate  = addproduct.UpdatedDate
    };
            dbContext.Products.Add(p);
            dbContext.SaveChanges();
            return Ok(p);
        }



    }


}
