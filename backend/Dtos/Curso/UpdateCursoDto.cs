using System.ComponentModel.DataAnnotations;

namespace Curso.Dtos{

    public record UpdateCursoDto{

        

        [Required]

	    public String? nombres { get; init; }


        [Required]
        [Range(0,Int16.MaxValue)]

	    public Int16 descripcion { get; init; }
    }
}