using Usuario.Entities;

namespace Usuario.Repositories{
    

    public class UsuarioDataStructure : IUsuarioDataStructure
    {
        private List<UsuarioItem> items = new()
        {
            new UsuarioItem { cui = "A1", nombres = "B", apellidos = "C", edad = 21 },
            new UsuarioItem { cui = "A2", nombres = "B2", apellidos = "C2", edad = 22 },
            new UsuarioItem { cui = "A3", nombres = "B3", apellidos = "C3", edad = 23 }
        };

        public IEnumerable<UsuarioItem> GetUsusarios()
        {
            return items;
        }

        public UsuarioItem? GetUsuario(string cui)
        {
            return items.Where(item => item.cui == cui).SingleOrDefault();
        }

        public void CreateUsuario(UsuarioItem item)
        {
            items.Add(item);
        }

        public void UpdateUsuario(UsuarioItem item)
        {
            var index = items.FindIndex(existingItem => existingItem.cui == item.cui);
            items[index] = item;
        }

        public void DeleteUsuario(string cui)
        {
            var index = items.FindIndex(existingItem => existingItem.cui == cui);
            items.RemoveAt(index);
        }
    }
}
