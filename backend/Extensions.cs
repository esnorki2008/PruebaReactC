using Usuario.Dtos;
using Usuario.Entities;

namespace Usuario{
    public static class Extensions{
        public static UsuarioItemDto AsDto(this UsuarioItem item){
            return  new UsuarioItemDto{
                Cui = item.Cui,
                Nombre = item.Nombre,
                Apellido = item.Apellido,
                Edad = item.Edad
            };
        }
    }
}