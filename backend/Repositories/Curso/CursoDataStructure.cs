using Curso.Entities;

namespace Curso.Repositories{
    

    public class CursoDataStructure : ICursoDataStructure
    {
        private List<CursoItem> items = new()
        {
            new CursoItem { codigo = "lib1", nombres = "lib1 nombres", descripcion = 21 },
            new CursoItem { codigo = "lib2", nombres = "lib2 nombres", descripcion = 22 },
            new CursoItem { codigo = "lib3", nombres = "lib3 nombres", descripcion = 23 }
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
