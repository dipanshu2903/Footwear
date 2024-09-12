using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EcommFoot.Model.AddDataFld
{
    public class AddPurchase
    {

      
        public int Purchase_Id { get; set; }

        public int Product_Id { get; set; }
    
        public decimal Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal SellPrice { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string PaymentMethod { get; set; }
        public string Status { get; set; }
    }
}
