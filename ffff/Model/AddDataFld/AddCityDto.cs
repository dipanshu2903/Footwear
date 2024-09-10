using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model.AddDataFld
{
    public class AddCityDto
    {

        public int Id { get; set; }

        
        public string CityName { get; set; }

     
        public int StateId { get; set; }
  

    }
}
