using Asignacion.Entities;

namespace Asignacion.Repositories{
    public interface IAsignacionDataStructure
    {
        AsignacionItem? GetAsignacion(Guid codigoAsignacion);
        IEnumerable<AsignacionItem> GetAsignaciones();
        void CreateAsignacion(AsignacionItem item);

        void UpdateAsignacion(AsignacionItem item);

        void DeleteAsignacion(Guid codigoAsignacion);
    }
}