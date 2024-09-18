using EcommFoot.Data;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model;
using Microsoft.AspNetCore.Mvc;
using EcommFoot.Model.dto;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet("all")]
        public IActionResult GetAllProducts()
        {
            return Ok(dbContext.Products.ToList());
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<getproduct>>>GetAllProduct()
        {
            var products = await dbContext.Products.Include(x => x.Color)
                                             .Include(x => x.Size)
                                             .Include(x => x.Subcategory)
                                             .Include(x => x.Vendor)
                                             .ToListAsync();
            var prod = products.Select(x => new getproduct { 
                Product_Id = x.Product_Id,
                VendorName = x.Vendor.FirstName,
                SubCategoryName = x.Subcategory.SubCategoryName,
                ColorName = x.Color.ColorName,
                SizeNo = x.Size.SizeNo,
                ProductName = x.ProductName,
                Description = x.Description,
                UnitPrice = x.UnitPrice,
                ImageUrl = x.ImageUrl,
                Gender = x.Gender,

            }).ToList();
            return Ok(prod);
        }

        [HttpPost]
        public IActionResult AddProduct(AddProduct addProduct)
        {

            var prod = new Product()
            {
                Product_Id = addProduct.Product_Id,
                VendorId = addProduct.VendorId,
                ColorId = addProduct.ColorId,
                SizeId = addProduct.SizeId,
                ProductName = addProduct.ProductName,
                ImageUrl = addProduct.ImageUrl,
                Description = addProduct.Description,
                UnitPrice = addProduct.UnitPrice,
                Gender = addProduct.Gender,
                SubcategoryId = addProduct.SubcategoryId
            };
            dbContext.Products.Add(prod);
            dbContext.SaveChanges();
            return Ok(prod);
        }

        [HttpPut("{Product_Id}")]
        public async Task<IActionResult> UpdateProduct(int Product_Id, [FromBody] AddProduct updateProduct)
        {
            if (Product_Id != updateProduct.Product_Id)
            {
                return BadRequest(new { message = "Product ID mismatch" });
            }

            var product = await dbContext.Products.FindAsync(Product_Id);
            if (product == null)
            {
                return NotFound(new { message = "Product not found" });
            }

            product.VendorId = updateProduct.VendorId;
            product.ColorId = updateProduct.ColorId;
            product.SizeId = updateProduct.SizeId;
            product.ProductName = updateProduct.ProductName;
            product.ImageUrl = updateProduct.ImageUrl;
            product.Description = updateProduct.Description;
            product.UnitPrice = updateProduct.UnitPrice;
            product.Gender = updateProduct.Gender;
            product.SubcategoryId = updateProduct.SubcategoryId;

            dbContext.Entry(product).State = EntityState.Modified;

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(Product_Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(product);
        }

        private bool ProductExists(int id)
        {
            return dbContext.Products.Any(e => e.Product_Id == id);
        }






        [HttpDelete("{product_id}")]
        public async Task<IActionResult> DeleteProduct(int product_id)
        {
            var product = await dbContext.Products.FindAsync(product_id);
            if (product == null)
            {
                return NotFound(new { message = "product not found" });
            }
            dbContext.Products.Remove(product);
            await dbContext.SaveChangesAsync();
            return Ok(new { message = "product deleted successfully" });
        }
    }
}
