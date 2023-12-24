using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewerRepository : ICRUDRepository<Reviewer>
    {
        ICollection<Review> GetReviewsByReviewer(int reviewerId);
    }
}
