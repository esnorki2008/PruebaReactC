using Usuario.Entities;

namespace Usuario.Repositories{
    

    public class UsuarioDataStructure : IUsuarioDataStructure
    {
        private List<UsuarioItem> items = new()
        {
            new UsuarioItem { cui = "1", nombres = "Luis Mario ", apellidos = "Perez Garcia", edad = 21 },
            new UsuarioItem { cui = "2", nombres = "Jose Ricardo", apellidos = "Marquez Garrido", edad = 22 },
            new UsuarioItem { cui = "3", nombres = "Guillermo Alexander", apellidos = "Ruiz Gonzales", edad = 23 }
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
