namespace Asignacion.Dtos{
    public record AsignacionItemDto{
        public Guid? codigoAsignacion { get; init; }
        public String? nombres { get; init; }
        public String? apellidos { get; init; }
        public String? curso { get; init; }
	    public String? descripcion { get; init; }
    }
}