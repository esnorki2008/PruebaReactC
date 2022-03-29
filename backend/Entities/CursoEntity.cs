namespace Curso.Entities{

    public record CursoItem{
        public String? codigo { get; init; }
        public String? nombres { get; init; }
	    public Int16 descripcion { get; init; }
    }
}