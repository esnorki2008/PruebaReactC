using Microsoft.AspNetCore.Mvc;
using Asignacion.Dtos;
using Asignacion.Entities;
using Asignacion.Repositories;
using Usuario.Repositories;
using Curso.Repositories;
using Usuario.Entities;
using Curso.Entities;

namespace Asignacion.Controllers{
    [ApiController]
    [Route("asignacion")]
    public class AsignacionItemController: ControllerBase{
        private readonly IAsignacionDataStructure repositoryAsignacion;
        private readonly ICursoDataStructure repositoryCurso;
        private readonly IUsuarioDataStructure repositoryUsuario;

        public AsignacionItemController(IUsuarioDataStructure repositoryUsuario,ICursoDataStructure repositoryCurso,IAsignacionDataStructure repositoryAsignacion){
            this.repositoryUsuario = repositoryUsuario;
            this.repositoryCurso = repositoryCurso;
            this.repositoryAsignacion = repositoryAsignacion;
        }

        private UsuarioItem GetUsuario(string cui){
            var retrievedUsuario = repositoryUsuario.GetUsuario(cui);
            if ( retrievedUsuario is null){
                return new UsuarioItem{
                    cui = "cui",
                    edad = 0,
                    nombres = "usuario eliminado",
                    apellidos = "usuario eliminado"
                };
            }else{
                return retrievedUsuario;
            }
        }

        private CursoItem GetCurso(string codigo){
            var retrievedCurso = repositoryCurso.GetCurso(codigo);
            if ( retrievedCurso is null){
                return new CursoItem{
                    codigo = codigo,
                    nombre = "curso eliminado",
                    descripcion = "curso eliminado"
                };
            }else{
                return retrievedCurso;
            }
        }


        [HttpGet]
        public IEnumerable<AsignacionItemDto> GetAsignacions(){
            var asignacionsList = repositoryAsignacion.GetAsignaciones().Select(
                (item) => {
                    var retrievedUsuario = this.GetUsuario(item.usuario);
                    var retrievedCurso = this.GetCurso(item.curso);

                    return item.AsDto(retrievedCurso,retrievedUsuario);
                }
            );
            return asignacionsList;
        }

        [HttpGet("{codigoAsignacion}")]
        public ActionResult<AsignacionItemDto> GetAsignacion(Guid codigoAsignacion){
            var retrievedAsignacion = repositoryAsignacion.GetAsignacion(codigoAsignacion);
            if(retrievedAsignacion is null){
                return NotFound();
            }
            var retrievedUsuario = this.GetUsuario(retrievedAsignacion.usuario);
            var retrievedCurso = this.GetCurso(retrievedAsignacion.curso);
            return Ok(retrievedAsignacion.AsDto(retrievedCurso,retrievedUsuario));
        }

        [HttpPost]
        public ActionResult<AsignacionItemDto> CreateAsignacion(CreateAsignacionDto asignacionDto){
            AsignacionItem newAsignacion = new(){
                codigoAsignacion = Guid.NewGuid(),
                usuario = asignacionDto.usuario,
                curso = asignacionDto.curso,
            };
            var retrievedUsuario = this.GetUsuario(asignacionDto.usuario);
            var retrievedCurso = this.GetCurso(asignacionDto.curso);
            repositoryAsignacion.CreateAsignacion(newAsignacion);
            return CreatedAtAction(nameof(GetAsignacion),new { codigoAsignacion = newAsignacion.codigoAsignacion}, newAsignacion.AsDto(retrievedCurso,retrievedUsuario));
        }

        [HttpPut("{codigoAsignacion}")]
        public ActionResult UpdateItem(Guid codigoAsignacion, UpdateAsignacionDto asignacionDto){
            var existingAsignacion = repositoryAsignacion.GetAsignacion(codigoAsignacion);
            if(existingAsignacion is null){
                return NotFound();
            }

            AsignacionItem updatedAsignacion = existingAsignacion with{
                usuario = asignacionDto.usuario,
                curso = asignacionDto.curso,
            };
            repositoryAsignacion.UpdateAsignacion(updatedAsignacion);
            return NoContent();
        }

        [HttpDelete("{codigoAsignacion}")]
        public ActionResult DeleteItem(Guid codigoAsignacion){
            var existingAsignacion = repositoryAsignacion.GetAsignacion(codigoAsignacion);
            if(existingAsignacion is null){
                return NotFound();
            }
            repositoryAsignacion.DeleteAsignacion(codigoAsignacion);
            return NoContent();
        }

        
    }
}