using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model
{
    public class Vendor
    {
        [Key]
       
        public int VendorId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Contact { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

       

        [ForeignKey("CityId")]
        public  int CityId { get; set; }
        public City City { get; set; }
    }
}
