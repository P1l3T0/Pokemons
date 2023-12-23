﻿using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewerRepository
    {
        bool ReviewerExists(int reviewerId);
        Reviewer GetReviewer(int reviewerId);
        ICollection<Reviewer> GetReviewers();
        ICollection<Review> GetReviewsByReviewer(int reviewerId);
    }
}
