using Asignacion.Entities;

namespace Asignacion.Repositories{
    

    public class AsignacionDataStructure : IAsignacionDataStructure
    {
        private List<AsignacionItem> items = new()
        {
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "1", curso = "1" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "1", curso = "2" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "1", curso = "3" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "2", curso = "1" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "2", curso = "2" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "2", curso = "3" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "3", curso = "1" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "3", curso = "2" },
            new AsignacionItem { codigoAsignacion = Guid.NewGuid(), usuario = "3", curso = "3" }
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
