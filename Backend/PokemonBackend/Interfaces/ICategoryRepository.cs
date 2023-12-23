using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICategoryRepository
    {
        bool CategoryExists(int id);
        Category GetCategory(int id);
        ICollection<Category> GetCategories();
        ICollection<Pokemon> GetPokemonByCategory(int categoryId);
    }
}
