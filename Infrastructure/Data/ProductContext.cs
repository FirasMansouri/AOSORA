
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions <ProductContext> options): base(options) { }
        public DbSet<ProductEntity> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(b =>
            {
                b.ToTable("Users").HasKey(x => x.id);
                b.Property(x => x.name).HasMaxLength(255).HasDefaultValue(string.Empty);
                b.Property(x => x.email).HasMaxLength(255).HasDefaultValue(string.Empty);
                b.Property(x => x.password).HasMaxLength(255).HasDefaultValue(string.Empty);
                b.OwnsOne(x => x.address, sb =>
                {
                    sb.Property(x => x.City).HasMaxLength(255).HasDefaultValue(string.Empty);
                    sb.Property(x => x.Street).HasMaxLength(255).HasDefaultValue(string.Empty);
                    sb.Property(x => x.ZipCode).HasMaxLength(255).HasDefaultValue(string.Empty);
                });
            });
        }
    }
}
