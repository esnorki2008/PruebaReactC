using Asignacion.Entities;

namespace Asignacion.Repositories{
    

    public class AsignacionDataStructure : IAsignacionDataStructure
    {
        private List<AsignacionItem> items = new()
        {
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "A1", curso = "lib1" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "A2", curso = "lib2" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "A3", curso = "lib3" }
        };

        public IEnumerable<AsignacionItem> GetAsignaciones()
        {
            return items;
        }

        public AsignacionItem? GetAsignacion(Guid codigoAsignacion)
        {
            return items.Where(item => item.codigoAsignacion == codigoAsignacion).SingleOrDefault();
        }

        public void CreateAsignacion(AsignacionItem item)
        {
            items.Add(item);
        }

        public void UpdateAsignacion(AsignacionItem item)
        {
            var index = items.FindIndex(existingItem => existingItem.codigoAsignacion == item.codigoAsignacion);
            items[index] = item;
        }

        public void DeleteAsignacion(Guid codigoAsignacion)
        {
            var index = items.FindIndex(existingItem => existingItem.codigoAsignacion == codigoAsignacion);
            items.RemoveAt(index);
        }
    }
}
