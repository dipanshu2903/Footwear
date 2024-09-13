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

        public DbSet<Category> categories { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Size>Sizes { get; set; }

        public DbSet<SubCategory> SubCategories { get; set; }

        public DbSet<Product> Products { get; set; }
        public DbSet<Purchase>Purchases { get; set; }
     

    }
}
