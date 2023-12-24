using PokemonBackend.Data;
using PokemonBackend.Interfaces;

namespace PokemonBackend.Repositories
{
    public class SaveRepository : ISaveRepository
    {
        private readonly DataContext _context;

        public SaveRepository(DataContext context)
        {
            _context = context;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0;
        }
    }
}
