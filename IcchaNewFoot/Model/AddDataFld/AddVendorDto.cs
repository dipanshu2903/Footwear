using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model.AddDataFld
{
    public class AddVendorDto
    {
        public int VendorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
    }
}
