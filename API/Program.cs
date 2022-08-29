
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Infrastructure.Repositories.Base;
using Infrastructure.Repositories;
using MediatR;
using Infrastructure.Data;
using Application.Product.Commands;
using Application.IRepositories.Base;
using Application.IRepositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Infrastructure.Utils;

var builder = WebApplication.CreateBuilder(args);
{
    ConfigurationManager configuration = builder.Configuration;
    builder.Services.AddControllers();
    builder.Services.AddDbContext<ProductContext>(options => options.UseSqlServer(configuration.GetConnectionString("ProductDB"), sqlserver => sqlserver.MigrationsAssembly("Infrastructure")));
    builder.Services.AddAutoMapper(typeof(Program));
    builder.Services.AddMediatR(typeof(AddProductCommandHandler).GetTypeInfo().Assembly);
    builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
    builder.Services.AddTransient<IProductRepository, ProductRepository>();
    builder.Services.AddTransient<IUserRepository, UserRepository>();
    builder.Services.AddTransient<IUtils, Utils>();
    builder.Services.AddRazorPages();
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });
}


var app = builder.Build();
{
    app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

    app.UseHttpsRedirection();
    app.UseStaticFiles();
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseEndpoints(endpoints =>endpoints.MapControllers());
    app.Run();
}

