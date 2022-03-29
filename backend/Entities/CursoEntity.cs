namespace Curso.Entities{

    public record CursoItem{
        public String? codigo { get; init; }
        public String? nombre { get; init; }
	    public String? descripcion { get; init; }
    }
}