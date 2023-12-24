using PokemonBackend.Data;

namespace PokemonBackend.Repositories
{
    public class BaseRepository
    {
        private readonly DataContext _context;

        public BaseRepository(DataContext context)
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
