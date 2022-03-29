using Microsoft.AspNetCore.Mvc;
using Usuario.Dtos;
using Usuario.Entities;
using Usuario.Repositories;

namespace Usuario.Controllers{
    [ApiController]
    [Route("usuario")]
    public class UsuarioItemController: ControllerBase{
        private readonly IInMemItemsRepository repository;

        public UsuarioItemController(IInMemItemsRepository repository){
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<UsuarioItemDto> GetUsuarios(){
            var usuariosList = repository.GetUsusarios().Select(item => item.AsDto());
            return usuariosList;
        }

        [HttpGet("{cui}")]
        public ActionResult<UsuarioItemDto> GetUsuario(string cui){
            var retrievedUsuario = repository.GetUsuario(cui);
            if(retrievedUsuario is null){
                return NotFound();
            }
            return Ok(retrievedUsuario.AsDto());
        }


        [HttpPost]
        public ActionResult<UsuarioItemDto> CreateUsuario(CreateUsuarioDto usuarioDto){
            UsuarioItem newUserio = new(){
                Cui = usuarioDto.Cui,
                Nombre = usuarioDto.Nombre,
                Apellido = usuarioDto.Apellido,
                Edad = usuarioDto.Edad
            };

            repository.CreateItem(newUserio);

            return CreatedAtAction(nameof(GetUsuario),new { cui = newUserio.Cui}, newUserio.AsDto());

        }

        [HttpPut("{cui}")]
        public ActionResult UpdateItem(string cui, UpdateUsuarioDto usuarioDto){
            var existingUsuario = repository.GetUsuario(cui);
            if(existingUsuario is null){
                return NotFound();
            }

            UsuarioItem updatedUsuario = existingUsuario with{
                Nombre = usuarioDto.Nombre,
                Apellido = usuarioDto.Apellido,
                Edad = usuarioDto.Edad
            };

            repository.UpdateItem(updatedUsuario);

            return NoContent();
        }

        // Delete /cui
        [HttpDelete("{cui}")]
        public ActionResult DeleteItem(string cui){
            var existingUsuario = repository.GetUsuario(cui);
            if(existingUsuario is null){
                return NotFound();
            }
            repository.DeleteItem(cui);
            return NoContent();
        }
    }
}