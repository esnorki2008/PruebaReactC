using System.ComponentModel.DataAnnotations;

namespace Curso.Dtos{

    public record CreateCursoDto{

        
        [Required]
        public String codigo { get; init; } = default!;


        [Required]

        public String nombres { get; init; } = default!;


        [Required]

	    public String descripcion { get; init; }  = default!;
    }
}