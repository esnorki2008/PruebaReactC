using System.ComponentModel.DataAnnotations;

namespace Usuario.Dtos{

    public record UpdateUsuarioDto{

        


        [Required]

        public String? Nombre { get; init; }



        [Required]

	    public String? Apellido { get; init; }


        [Required]
        [Range(0,Int16.MaxValue)]

	    public Int16 Edad { get; init; }
    }
}