using EcommFoot.Model;
using Microsoft.EntityFrameworkCore;

namespace EcommFoot.Data
{
    public class VendorDbContext : DbContext 
    {
        public VendorDbContext(DbContextOptions<VendorDbContext> options) : base(options) { }

        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}
