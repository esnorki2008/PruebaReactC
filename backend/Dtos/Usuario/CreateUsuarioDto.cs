using System.ComponentModel.DataAnnotations;

namespace Usuario.Dtos{

    public record CreateUsuarioDto{

        
        [Required]
        public String cui { get; init; } = default!;


        [Required]

        public String nombres { get; init; } = default!;



        [Required]

	    public String apellidos { get; init; } = default!;


        [Required]
        [Range(0,Int16.MaxValue)]

	    public Int16 edad { get; init; }
    }
}