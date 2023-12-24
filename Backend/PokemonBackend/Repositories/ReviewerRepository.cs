using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace PokemonBackend.Repositories
{
    public class ReviewerRepository : SaveRepository, IReviewerRepository
    {
        private readonly DataContext _context;

        public ReviewerRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool Exists(int reviewerId)
        {
            return _context.Revieweres.Any(r => r.Id == reviewerId);
        }

        public bool Delete(int reviewerId)
        {
            throw new NotImplementedException();
        }

        public bool Create(Reviewer reviewer)
        {
            _context.Add(reviewer);

            return Save();
        }

        public bool Update(Reviewer reviewer)
        {
            _context.Update(reviewer);

            return Save();
        }

        public Reviewer GetById(int reviewerId)
        {
            return _context.Revieweres
                .Where(r => r.Id == reviewerId)
                .Include(e => e.Reviews)
                .FirstOrDefault()!;
        }

        public ICollection<Reviewer> GetAll()
        {
            return _context.Revieweres.ToList();
        }

        public ICollection<Review> GetReviewsByReviewer(int reviewerId)
        {
            return _context.Reviews
                .Where(r => r.Reviewer!.Id == reviewerId)
                .ToList();
        }
    }
}
