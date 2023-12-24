using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryRepository(DataContext context) 
        {
            _context = context;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0;
        }

        public bool Exists(int categoryId)
        {
            return _context.Categories.Any(c => c.Id == categoryId);
        }

        public bool Delete(int categoryId)
        {
            throw new NotImplementedException();
        }

        public bool Create(Category category)
        {
            _context.Add(category);

            return Save();
        }

        public bool Update(Category category)
        {
            _context.Update(category);

            return Save();
        }

        public Category GetById(int categoryId)
        {
            return _context.Categories
                .Where(c => c.Id == categoryId)
                .FirstOrDefault()!;
        }

        public ICollection<Category> GetAll()
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
    }
}
