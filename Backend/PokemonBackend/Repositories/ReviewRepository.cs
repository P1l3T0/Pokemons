using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class ReviewRepository : SaveRepository, IReviewRepository
    {
        private readonly DataContext _context;

        public ReviewRepository(DataContext context) : base(context)
        {
            _context = context;
        }  

        public bool Exists(int reviewId)
        {
            return _context.Reviews.Any(r => r.Id == reviewId);
        }

        public bool Create(Review review)
        {
            _context.Add(review);

            return Save();
        }

        public bool Update(Review review)
        {
            _context.Update(review);

            return Save();
        }

        public bool Delete(Review review)
        {
            _context.Remove(review);

            return Save();
        }

        public bool DeleteReviews(ICollection<Review> reviews)
        {
            _context.RemoveRange(reviews);

            return Save();
        }

        public Review GetById(int reviewId)
        {
            return _context.Reviews
                .Where(r => r.Id == reviewId)
                .FirstOrDefault()!;
        }

        public ICollection<Review> GetAll()
        {
            return _context.Reviews.ToList();
        }

        public ICollection<Review> GetReviewsForPokemon(int pokeId)
        {
            return _context.Reviews
                .Where(r => r.Pokemon!.Id == pokeId)
                .ToList();
        }
    }
}
