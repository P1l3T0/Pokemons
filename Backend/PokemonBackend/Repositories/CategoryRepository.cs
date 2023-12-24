using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool CategoryExists(int id)
        {
            return _context.Categories.Any(c => c.Id == id);
        }

        public Category GetCategory(int id)
        {
            return _context.Categories
                .Where(c => c.Id == id)
                .FirstOrDefault()!;
        }

        public ICollection<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }

        public ICollection<Pokemon> GetPokemonByCategory(int categoryId)
        {
            return _context.PokemonCategories
                .Where(c => c.CategoryId == categoryId)
                .Select(c => c.Pokemon)
                .ToList()!;
        }

        public bool CreateCategory(Category category)
        {
            _context.Add(category);

            return Save();
        }

        public bool UpdateCategory(Category category)
        {
            _context.Update(category);

            return Save();
        }
    }
}
