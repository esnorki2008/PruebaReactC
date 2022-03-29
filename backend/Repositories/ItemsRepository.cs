using Usuario.Entities;

namespace Usuario.Repositories{
    public interface IInMemItemsRepository
    {
        UsuarioItem? GetUsuario(string Cui);
        IEnumerable<UsuarioItem> GetUsusarios();
        void CreateItem(UsuarioItem item);

        void UpdateItem(UsuarioItem item);

        void DeleteItem(String cui);
    }
}