namespace Asignacion.Entities{

    public record AsignacionItem{
        public Guid codigoAsignacion  { get; init; } = default!;

        public String usuario { get; init; } = default!;

	    public String curso { get; init; } = default!;

    }
}