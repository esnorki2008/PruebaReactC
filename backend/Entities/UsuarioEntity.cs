namespace Usuario.Entities{

    public record UsuarioItem{
        public String? Cui { get; init; }
        public String? Nombre { get; init; }
	    public String? Apellido { get; init; }
	    public Int16 Edad { get; init; }
    }
}