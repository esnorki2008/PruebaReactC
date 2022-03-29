using System.ComponentModel.DataAnnotations;

namespace Usuario.Dtos{

    public record UpdateUsuarioDto{

        


        [Required]

        public String? nombres { get; init; }



        [Required]

	    public String? apellidos { get; init; }


        [Required]
        [Range(0,Int16.MaxValue)]

	    public Int16 edad { get; init; }
    }
}