using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly DataContext _context;

        public ReviewRepository(DataContext context)
        {
            _context = context;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0;
        }

        public bool Exists(int reviewId)
        {
            return _context.Reviews.Any(r => r.Id == reviewId);
        }

        public bool Delete(int reviewId)
        {
            throw new NotImplementedException();
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
