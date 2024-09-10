using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        [ForeignKey("SubCategory")]
        public int SubCategoryId { get; set; }
        public SubCategory SubCategory { get; set; }

        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public  DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

    }
}
