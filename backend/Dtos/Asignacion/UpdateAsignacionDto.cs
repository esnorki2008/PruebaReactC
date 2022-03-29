using System.ComponentModel.DataAnnotations;

namespace Asignacion.Dtos{

    public record UpdateAsignacionDto{

        

        [Required]
        public String usuario { get; init; } = default!;


        [Required]

        public String curso { get; init; } = default!;
    }
}