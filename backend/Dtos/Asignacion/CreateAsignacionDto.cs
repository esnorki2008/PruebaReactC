using System.ComponentModel.DataAnnotations;

namespace Asignacion.Dtos{

    public record CreateAsignacionDto{

        
        [Required]
        public String usuario { get; init; } = default!;


        [Required]

        public String curso { get; init; } = default!;

    }
}