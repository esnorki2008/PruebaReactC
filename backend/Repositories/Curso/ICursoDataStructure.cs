using Curso.Entities;

namespace Curso.Repositories{
    public interface ICursoDataStructure
    {
        CursoItem? GetCurso(string codigo);
        IEnumerable<CursoItem> GetUsusarios();
        void CreateCurso(CursoItem item);

        void UpdateCurso(CursoItem item);

        void DeleteCurso(String codigo);
    }
}