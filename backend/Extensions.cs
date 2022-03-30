using Asignacion.Dtos;
using Asignacion.Entities;
using Curso.Dtos;
using Curso.Entities;
using Usuario.Dtos;
using Usuario.Entities;

namespace Usuario{
    public static class Extensions{
        public static UsuarioItemDto AsDto(this UsuarioItem item){
            return  new UsuarioItemDto{
                cui = item.cui,
                nombres = item.nombres,
                apellidos = item.apellidos,
                edad = item.edad
            };
        }

        
    }
}

namespace Curso {
    public static class Extensions{
        public static CursoItemDto AsDto(this CursoItem item){
            return  new CursoItemDto{
                codigo = item.codigo,
                nombre = item.nombre,
                descripcion = item.descripcion
            };
        }

    }
}

namespace Asignacion {
    public static class Extensions{
        public static AsignacionItemDto AsDto(this AsignacionItem item,CursoItem curso,UsuarioItem usuario){
            return  new AsignacionItemDto{
                codigoAsignacion  = item.codigoAsignacion ,
                
                nombres = usuario.nombres,
                apellidos = usuario.apellidos,
                
                curso = curso.nombre,
                descripcion = curso.descripcion,
            };
        }

    }
}