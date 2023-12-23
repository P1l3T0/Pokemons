using AutoMapper;
using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class ReviewRepository : IReviewRepository   
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ReviewRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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
    }
}
