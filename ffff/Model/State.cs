using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model
{
    public class State
    {
        [Key]
        public int Id { get; set; }

        [StringLength(250)]
        [Required]
        public string StateName { get; set; }

        public ICollection<Vendor> Vendors { get; set; }
        public ICollection<City> Cities { get; set; }
    }
}
