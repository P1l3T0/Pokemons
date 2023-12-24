using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewerRepository : IBaseRepository
    {
        bool ReviewerExists(int reviewerId);
        Reviewer GetReviewer(int reviewerId);
        ICollection<Reviewer> GetReviewers();
        ICollection<Review> GetReviewsByReviewer(int reviewerId);
        bool CreateReviewer(Reviewer reviewer);
        bool UpdateReviewer(Reviewer reviewer);
    }
}
