using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICategoryRepository : ICRUDRepository<Category>
    {
        ICollection<Pokemon> GetPokemonByCategory(int categoryId);
    }
}
