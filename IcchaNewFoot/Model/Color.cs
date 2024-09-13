using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model
{
    public class Color
    {
        [Key]
        public int ColorId { get; set; }
        [StringLength(255)]
        public string ? ColorName { get; set; }

        public ICollection<Product>Products { get; set; }
    }
    public class Brand
    {
        [Key]
        public int BrandId { get; set; }

        [StringLength(255)]
        public string? BrandName { get; set; }

        public ICollection<SubCategory> SubCategories { get; set; }
    }

    public class Size
    {
        [Key]
        public int SizeId { get; set; }

        public string  SizeNo { get; set; }
        public ICollection<Product> Products { get; set; }
    }

}
