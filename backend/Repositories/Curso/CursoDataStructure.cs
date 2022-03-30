using Curso.Entities;

namespace Curso.Repositories{
    

    public class CursoDataStructure : ICursoDataStructure
    {
        private List<CursoItem> items = new()
        {
            new CursoItem { codigo = "1", nombre = "Matematica 0", descripcion = "Curso de Matematica Iniciañ" },
            new CursoItem { codigo = "2", nombre = "Ordenamiento", descripcion = "organizar  libros" },
            new CursoItem { codigo = "3", nombre = "Ingle", descripcion = "Aprendizaje de otro idioma" }
        };

        public IEnumerable<CursoItem> GetUsusarios()
        {
            return items;
        }

        public CursoItem? GetCurso(string codigo)
        {
            return items.Where(item => item.codigo == codigo).SingleOrDefault();
        }

        public void CreateCurso(CursoItem item)
        {
            items.Add(item);
        }

        public void UpdateCurso(CursoItem item)
        {
            var index = items.FindIndex(existingItem => existingItem.codigo == item.codigo);
            items[index] = item;
        }

        public void DeleteCurso(string codigo)
        {
            var index = items.FindIndex(existingItem => existingItem.codigo == codigo);
            items.RemoveAt(index);
        }
    }
}
