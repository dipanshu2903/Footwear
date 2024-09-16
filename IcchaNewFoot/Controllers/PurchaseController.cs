using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommFoot.Data;
using EcommFoot.Model;
using EcommFoot.Model.AddDataFld;
using EcommFoot.Model.dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommFoot.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PurchaseController : ControllerBase
{
    private readonly VendorDbContext dbContext;

    public PurchaseController(VendorDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    [HttpGet]
<<<<<<< HEAD
    public async Task<ActionResult<IEnumerable<GetPurch>>> GetAllPurchase()
    {
        List<GetPurch> p = (await dbContext.Purchases
            .Include((Purchase x) => x.Product)
            .ToListAsync()).Select((Purchase x) => new GetPurch
            {
                ProductName = x.Product.ProductName,
                Purchase_Id = x.Purchase_Id,
                Quantity = x.Quantity,
                UnitPrice = x.UnitPrice,
                TotalPrice = x.TotalPrice,
                SellPrice = x.SellPrice,
                PurchaseDate = x.PurchaseDate,
                PaymentMethod = x.PaymentMethod,
                Status = x.Status
            }).ToList();
=======
    public async Task<ActionResult<IEnumerable<GetPurchase>>> GetAllPurchase()
    {
        List<GetPurchase> p = (await dbContext.Purchases
            .Include((Purchase x) => x.Product)
            .ToListAsync()).Select((Purchase x) => new GetPurchase
        {
            ProductName = x.Product.ProductName,
            Purchase_Id = x.Purchase_Id,
            Quantity = x.Quantity,
            UnitPrice = x.UnitPrice,
            TotalPrice = x.TotalPrice,
            SellPrice = x.SellPrice,
            PurchaseDate = x.PurchaseDate,
            PaymentMethod = x.PaymentMethod,
            Status = x.Status
        }).ToList();
>>>>>>> 4d77fda25a128bc0fafc5892c7c79d4cf76b63fa
        return Ok(p);
    }

    [HttpPost]
    public IActionResult AddPurchase(AddPurchase addPurchase)
    {
        var TotalAmount = addPurchase.UnitPrice * addPurchase.Quantity;
        Purchase pur = new Purchase
        {
            Product_Id = addPurchase.Product_Id,
            Purchase_Id = addPurchase.Purchase_Id,
            Quantity = addPurchase.Quantity,
            UnitPrice = addPurchase.UnitPrice,
<<<<<<< HEAD
            TotalPrice = TotalAmount,
=======
            TotalPrice =TotalAmount,
>>>>>>> 4d77fda25a128bc0fafc5892c7c79d4cf76b63fa
            SellPrice = addPurchase.SellPrice,
            PurchaseDate = addPurchase.PurchaseDate,
            PaymentMethod = addPurchase.PaymentMethod,
            Status = addPurchase.Status
        };
        dbContext.Purchases.Add(pur);
        dbContext.SaveChanges();
        return Ok(pur);
    }
}

