namespace Curso.Dtos{
    public record CursoItemDto{
        public String? codigo { get; init; }
        public String? nombres { get; init; }
	    public Int16 descripcion { get; init; }
    }
}