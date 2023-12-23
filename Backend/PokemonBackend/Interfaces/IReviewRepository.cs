using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewRepository : IBaseRepository
    {
        bool ReviewExists(int reviewId);
        Review GetReview(int reviewId);
        ICollection<Review> GetReviews();
        ICollection<Review> GetReviewsForPokemon(int pokeId);
        bool CreateReview(Review review);
    }
}
