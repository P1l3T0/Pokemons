using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICategoryRepository : IBaseRepository
    {
        bool CategoryExists(int id);
        Category GetCategory(int id);
        ICollection<Category> GetCategories();
        ICollection<Pokemon> GetPokemonByCategory(int categoryId);
        bool CreateCategory(Category category);
        bool UpdateCategory(Category category);
    }
}
