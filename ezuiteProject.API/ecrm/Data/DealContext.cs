using ecrm.Models;
using Microsoft.EntityFrameworkCore;

namespace ecrm.Data
{
    public class DealContext : DbContext
    {
        public DealContext(DbContextOptions<DealContext> options) : base(options) { }

        public DbSet<Deal> Deals { get; set; }
    }
}
