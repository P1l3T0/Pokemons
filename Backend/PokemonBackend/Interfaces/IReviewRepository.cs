using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewRepository : ICRUDRepository<Review>
    {
        ICollection<Review> GetReviewsForPokemon(int pokeId);
    }
}
