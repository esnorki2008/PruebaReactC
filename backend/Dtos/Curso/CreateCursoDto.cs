using System.ComponentModel.DataAnnotations;

namespace Curso.Dtos{

    public record CreateCursoDto{

        
        [Required]
        public String codigo { get; init; } = default!;


        [Required]

        public String nombres { get; init; } = default!;


        [Required]
        [Range(0,Int16.MaxValue)]

	    public Int16 descripcion { get; init; }
    }
}