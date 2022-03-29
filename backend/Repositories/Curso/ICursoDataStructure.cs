using Curso.Entities;

namespace Curso.Repositories{
    public interface ICursoDataStructure
    {
        CursoItem? GetCurso(string Cui);
        IEnumerable<CursoItem> GetUsusarios();
        void CreateCurso(CursoItem item);

        void UpdateCurso(CursoItem item);

        void DeleteCurso(String cui);
    }
}