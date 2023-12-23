using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class ReviewRepository : BaseRepository, IReviewRepository
    {
        private readonly DataContext _context;

        public ReviewRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool ReviewExists(int reviewId)
        {
            return _context.Reviews.Any(r => r.Id == reviewId);
        }

        public ICollection<Review> GetReviews()
        {
            return _context.Reviews.ToList();
        }

        public Review GetReview(int reviewId)
        {
            return _context.Reviews
                .Where(r => r.Id == reviewId)
                .FirstOrDefault()!;
        }

        public ICollection<Review> GetReviewsForPokemon(int pokeId)
        {
            return _context.Reviews
                .Where(r => r.Pokemon!.Id == pokeId)
                .ToList();
        }

        public bool CreateReview(Review review)
        {
            _context.Add(review);

            return Save();
        }
    }
}
