using System.ComponentModel.DataAnnotations;

namespace Curso.Dtos{

    public record UpdateCursoDto{

        

        [Required]

	    public String? nombre { get; init; }


        [Required]
       
	    public String? descripcion { get; init; }
    }
}