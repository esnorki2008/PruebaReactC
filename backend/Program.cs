using Asignacion.Repositories;
using Curso.Repositories;
using Usuario.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Adding Repositories
builder.Services.AddSingleton<IUsuarioDataStructure,UsuarioDataStructure>();
builder.Services.AddSingleton<ICursoDataStructure,CursoDataStructure>();
builder.Services.AddSingleton<IAsignacionDataStructure,AsignacionDataStructure>();


var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .SetIsOriginAllowed(origin => true));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
