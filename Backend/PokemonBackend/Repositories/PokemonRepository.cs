using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly DataContext _context;

        public PokemonRepository(DataContext context)
        {
            _context = context;
        }

        public bool PokemonExists(int pokeId)
        {
            return _context.Pokemon.Any(p => p.Id == pokeId);
        }

        public decimal GetPokemonRating(int pokeId)
        {
            var review = _context.Reviews.Where(p => p.Pokemon!.Id == pokeId);

            if (!review.Any())
                return 0;

            return ((decimal)review.Sum(r => r.Rating)) / review.Count();
        }

        public Pokemon GetPokemon(int id)
        {
            return _context.Pokemon
                .Where(p => p.Id == id)
                .FirstOrDefault()!;
        }

        public Pokemon GetPokemon(string name)
        {
            return _context.Pokemon
                .Where(p => p.Name == name)
                .FirstOrDefault()!;
        }

        public ICollection<Pokemon> GetPokemons()
        {
            return _context.Pokemon
                .OrderBy(p => p.Id)
                .ToList();
        }
    }
}
