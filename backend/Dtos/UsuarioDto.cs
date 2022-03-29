namespace Usuario.Dtos{
    public record UsuarioItemDto{
        public String? Cui { get; init; }
        public String? Nombre { get; init; }
	    public String? Apellido { get; init; }
	    public Int16 Edad { get; init; }
    }
}