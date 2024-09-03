using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model
{
    public class Category
    {
        [Key]
        public int CategoryId{ get; set; }

        [StringLength(255)]
        public string CateName { get; set; }
    }
}
