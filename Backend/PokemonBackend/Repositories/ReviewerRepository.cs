using Microsoft.EntityFrameworkCore;
using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class ReviewerRepository : BaseRepository, IReviewerRepository
    {
        private readonly DataContext _context;

        public ReviewerRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool ReviewerExists(int reviewerId)
        {
            return _context.Revieweres.Any(r => r.Id == reviewerId);
        }

        public Reviewer GetReviewer(int reviewerId)
        {
            return _context.Revieweres
                .Where(r => r.Id == reviewerId)
                .Include(e => e.Reviews)
                .FirstOrDefault()!;
        }

        public ICollection<Reviewer> GetReviewers()
        {
            return _context.Revieweres.ToList();
        }

        public ICollection<Review> GetReviewsByReviewer(int reviewerId)
        {
            return _context.Reviews
                .Where(r => r.Reviewer!.Id == reviewerId)
                .ToList();
        }

        public bool CreateReviewer(Reviewer reviewer)
        {
            _context.Add(reviewer);

            return Save();  
        }
    }
}
