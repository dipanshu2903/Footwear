using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model.AddDataFld
{
    public class AddProduct
    {
        public int Product_Id { get; set; }
        public int VendorId { get; set; }
        public int SubcategoryId { get; set; }
        public int ColorId { get; set; }
        public int SizeId { get; set; }
        public string ProductName { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public decimal UnitPrice { get; set; }
        public string Gender { get; set; }
    }
}
