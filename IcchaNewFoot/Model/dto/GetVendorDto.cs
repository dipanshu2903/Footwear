using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model.dto
{
    public class GetVendorDto
    {
        public int VendorId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Contact { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string StateName { get; set; }
        public string CityName { get; set; }
    }
}
