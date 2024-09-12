using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model
{
    public class Product
    {
        [Key]
        public int Product_Id { get; set; }

        [ForeignKey ("Vendor")]
        public int VendorId { get; set; } 

        public Vendor Vendor { get; set; }

        [ForeignKey ("SubCategory")]
        public int SubcategoryId { get; set; } 

        public SubCategory Subcategory { get; set; }

        [ForeignKey ("Color")]
        public int ColorId { get; set; } 

        public Color Color { get; set; }

        [ForeignKey ("Size")]
        public int SizeId { get; set; } 

        public Size Size { get; set; }
        public string ProductName { get; set; } 
        public string ImageUrl { get; set; } 
        public string Description { get; set; } 
        public decimal UnitPrice { get; set; } 
        public string Gender { get; set; } 
        public ICollection<Purchase> Purchases { get; set; }
    }
}
