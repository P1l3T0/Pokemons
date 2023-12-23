﻿using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IReviewRepository
    {
        bool ReviewExists(int reviewId);
        Review GetReview(int reviewId);
        ICollection<Review> GetReviews();
        ICollection<Review> GetReviewsForPokemon(int pokeId);
    }
}