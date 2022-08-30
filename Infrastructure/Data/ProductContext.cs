
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Infrastructure.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }
        public DbSet<ProductEntity> Products { get; set; }
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<RoleEntity> Roles { get; set; }
        public DbSet<CategoryEntity> Categories { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>(b =>
            {
                b.ToTable("Users").HasKey(x => x.UserId);
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

            modelBuilder.Entity<UserEntity>()
                .HasOne<RoleEntity>(u => u.role)
                .WithMany(r=>r.Users)
                .HasForeignKey(u => u.RoleId);


            modelBuilder.Entity<ProductEntity>()
                .HasOne<CategoryEntity>(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId);
        }
    }
}