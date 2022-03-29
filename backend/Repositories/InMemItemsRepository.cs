using Usuario.Entities;

namespace Usuario.Repositories{
    

    public class InMemItemsRepository : IInMemItemsRepository
    {
        private List<UsuarioItem> items = new()
        {
            new UsuarioItem { Cui = "A1", Nombre = "B", Apellido = "C", Edad = 21 },
            new UsuarioItem { Cui = "A2", Nombre = "B2", Apellido = "C2", Edad = 22 },
            new UsuarioItem { Cui = "A3", Nombre = "B3", Apellido = "C3", Edad = 23 }
        };

        public IEnumerable<UsuarioItem> GetUsusarios()
        {
            return items;
        }

        public UsuarioItem? GetUsuario(string Cui)
        {
            return items.Where(item => item.Cui == Cui).SingleOrDefault();
        }

        public void CreateItem(UsuarioItem item)
        {
            items.Add(item);
        }

        public void UpdateItem(UsuarioItem item)
        {
            var index = items.FindIndex(existingItem => existingItem.Cui == item.Cui);
            items[index] = item;
        }

        public void DeleteItem(string cui)
        {
            var index = items.FindIndex(existingItem => existingItem.Cui == cui);
            items.RemoveAt(index);
        }
    }
}
