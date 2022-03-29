using Usuario.Entities;

namespace Usuario.Repositories{
    public interface IUsuarioDataStructure
    {
        UsuarioItem? GetUsuario(string Cui);
        IEnumerable<UsuarioItem> GetUsusarios();
        void CreateUsuario(UsuarioItem item);

        void UpdateUsuario(UsuarioItem item);

        void DeleteUsuario(String cui);
    }
}