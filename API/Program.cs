using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();
builder.Services.AddMediatR(options =>
    options.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>()
);
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);


var app = builder.Build();

app.UseCors(options =>
{
    options.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("https://localhost:3000", "https://localhost:3000");
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "数据库迁移时发生错误！");
}

app.Run();
