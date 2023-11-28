using CaseTransfer.Data.Inteface;
using CaseTransfer.Data.Repository;
using CaseTransfer.DBEngine;
using CaseTransfer.Service.Interface;
using CaseTransfer.Service.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

builder.Services.AddScoped<ISQLServerHandler, SQLServerHandler>();
builder.Services.AddScoped<ICaseTransferRepository, CaseTransferRepository>();
builder.Services.AddScoped<IDashboardRepository, DashboardRepository>();
builder.Services.AddScoped<ICaseTransferServices, CaseTransferServices>();
builder.Services.AddScoped<IDashboardService, DashboardService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
