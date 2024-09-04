using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model
{
    public class City
    {
        [Key]
      
        public int Id { get; set; }

        [StringLength(255)]
        public string CityName { get; set; }

        [ForeignKey("State")]
        public int StateId { get; set; }
        public State State { get; set; }

        public ICollection<Vendor> Vendors { get; set; }
    }
}
