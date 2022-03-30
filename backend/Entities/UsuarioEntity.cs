namespace Usuario.Entities{

    public record UsuarioItem{
        public String? cui { get; init; }
        public String? nombres { get; init; }
	    public String? apellidos { get; init; }
	    public Int16 edad { get; init; }
    }
}