namespace Curso.Entities{

    public record CursoItem{
        public String codigo { get; init; } = default!;
        public String nombre { get; init; } = default!;
	    public String descripcion { get; init; } = default!;
    }
}