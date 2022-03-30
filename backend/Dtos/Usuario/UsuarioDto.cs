namespace Usuario.Dtos{
    public record UsuarioItemDto{
        public String? cui { get; init; }
        public String? nombres { get; init; }
	    public String? apellidos { get; init; }
	    public Int16 edad { get; init; }
    }
}