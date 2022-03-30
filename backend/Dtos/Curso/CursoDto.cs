namespace Curso.Dtos{
    public record CursoItemDto{
        public String? codigo { get; init; }
        public String? nombre { get; init; }
	    public String? descripcion { get; init; }
    }
}