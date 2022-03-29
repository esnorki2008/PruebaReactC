using Microsoft.AspNetCore.Mvc;
using Curso.Dtos;
using Curso.Entities;
using Curso.Repositories;

namespace Curso.Controllers{
    [ApiController]
    [Route("curso")]
    public class CursoItemController: ControllerBase{
        private readonly ICursoDataStructure repository;

        public CursoItemController(ICursoDataStructure repository){
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<CursoItemDto> GetCursos(){
            var cursosList = repository.GetUsusarios().Select(item => item.AsDto());
            return cursosList;
        }

        [HttpGet("{codigo}")]
        public ActionResult<CursoItemDto> GetCurso(string codigo){
            var retrievedCurso = repository.GetCurso(codigo);
            if(retrievedCurso is null){
                return NotFound();
            }
            return Ok(retrievedCurso.AsDto());
        }


        [HttpPost]
        public ActionResult<CursoItemDto> CreateCurso(CreateCursoDto cursoDto){
            var existingCurso = repository.GetCurso(cursoDto.codigo);
            if(existingCurso is null){
                CursoItem newUserio = new(){
                    codigo = cursoDto.codigo,
                    nombres = cursoDto.nombres,
                    descripcion = cursoDto.descripcion,
                };
                repository.CreateCurso(newUserio);
                return CreatedAtAction(nameof(GetCurso),new { codigo = newUserio.codigo}, newUserio.AsDto());
            }
            return Conflict();
        }

        [HttpPut("{codigo}")]
        public ActionResult UpdateItem(string codigo, UpdateCursoDto cursoDto){
            var existingCurso = repository.GetCurso(codigo);
            if(existingCurso is null){
                return NotFound();
            }

            CursoItem updatedCurso = existingCurso with{
                nombres = cursoDto.nombres,
                descripcion = cursoDto.descripcion,
            };

            repository.UpdateCurso(updatedCurso);

            return NoContent();
        }

        // Delete /codigo
        [HttpDelete("{codigo}")]
        public ActionResult DeleteItem(string codigo){
            var existingCurso = repository.GetCurso(codigo);
            if(existingCurso is null){
                return NotFound();
            }
            repository.DeleteCurso(codigo);
            return NoContent();
        }
    }
}