using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model.AddDataFld
{
    public class AddProduct
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int SubCategoryId { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
