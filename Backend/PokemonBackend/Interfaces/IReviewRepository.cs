using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewRepository : ICRUDRepository<Review>
    {
        bool DeleteReviews(ICollection<Review> reviews);
        ICollection<Review> GetReviewsForPokemon(int pokeId);
    }
}
