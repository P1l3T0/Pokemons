using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICRUDRepository<T> where T : BaseModel
    {
        bool Exists(int id);
        bool Delete(int id);
        bool Create(T model);
        bool Update(T model);
        T GetById(int id);
        ICollection<T> GetAll();
    }
}
