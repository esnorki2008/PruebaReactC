using Microsoft.AspNetCore.Mvc;
using Usuario.Dtos;
using Usuario.Entities;
using Usuario.Repositories;

namespace Usuario.Controllers{
    [ApiController]
    [Route("usuario")]
    public class UsuarioItemController: ControllerBase{
        private readonly IUsuarioDataStructure repository;

        public UsuarioItemController(IUsuarioDataStructure repository){
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
            var existingUsuario = repository.GetUsuario(usuarioDto.cui);
            if(existingUsuario is null){
                UsuarioItem newUserio = new(){
                    cui = usuarioDto.cui,
                    nombres = usuarioDto.nombres,
                    apellidos = usuarioDto.apellidos,
                    edad = usuarioDto.edad
                };
                repository.CreateUsuario(newUserio);
                return CreatedAtAction(nameof(GetUsuario),new { cui = newUserio.cui}, newUserio.AsDto());
            }
            return Conflict();
        }

        [HttpPut("{cui}")]
        public ActionResult UpdateItem(string cui, UpdateUsuarioDto usuarioDto){
            var existingUsuario = repository.GetUsuario(cui);
            if(existingUsuario is null){
                return NotFound();
            }

            UsuarioItem updatedUsuario = existingUsuario with{
                nombres = usuarioDto.nombres,
                apellidos = usuarioDto.apellidos,
                edad = usuarioDto.edad
            };

            repository.UpdateUsuario(updatedUsuario);

            return NoContent();
        }

        // Delete /cui
        [HttpDelete("{cui}")]
        public ActionResult DeleteItem(string cui){
            var existingUsuario = repository.GetUsuario(cui);
            if(existingUsuario is null){
                return NotFound();
            }
            repository.DeleteUsuario(cui);
            return NoContent();
        }
    }
}