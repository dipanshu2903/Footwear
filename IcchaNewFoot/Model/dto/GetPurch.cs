using System.ComponentModel.DataAnnotations.Schema;

namespace EcommFoot.Model.dto
{
    public class GetPurch
    {
        public int Purchase_Id { get; set; }
        public int ProductName { get; set; }
        public decimal Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal SellPrice { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string PaymentMethod { get; set; }
        public string Status { get; set; }
    }
}
