using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model
{
    public class Color
    {
        [Key]
        public int ColorId { get; set; }
        [StringLength(255)]
        public string ? ColorName { get; set; }
    }
    public class Brand
    {
        [Key]
        public int BrandId { get; set; }

        [StringLength(255)]
        public string? BrandName { get; set; }
    }


}
