using System.ComponentModel.DataAnnotations;

namespace Curso.Dtos{

    public record UpdateCursoDto{

        

        [Required]

	    public String? nombres { get; init; }


        [Required]
       
	    public String? descripcion { get; init; }
    }
}