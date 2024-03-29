﻿using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class PokemonRepository : SaveRepository, IPokemonRepository
    {
        private readonly DataContext _context;

        public PokemonRepository(DataContext context) : base (context)
        {
            _context = context;
        }

        public bool Exists(int pokeId)
        {
            return _context.Pokemon.Any(p => p.Id == pokeId);
        }

        public decimal GetPokemonRating(int pokeId)
        {
            var review = _context.Reviews.Where(p => p.Pokemon!.Id == pokeId);

            if (!review.Any())
                return 0;

            return ((decimal)review.Sum(r => r.Rating)) / review.Count();
        }

        public Pokemon GetById(int id)
        {
            return _context.Pokemon
                .Where(p => p.Id == id)
                .FirstOrDefault()!;
        }

        public Pokemon GetPokemon(string name)
        {
            return _context.Pokemon
                .Where(p => p.Name == name)
                .FirstOrDefault()!;
        }

        public ICollection<Pokemon> GetAll()
        {
            return _context.Pokemon
                .OrderBy(p => p.Id)
                .ToList();
        }

        public bool Create(int ownerId, int categoryId, Pokemon pokemon)
        {
            var pokemonOwnerEntity = _context.Owners
                .Where(o => o.Id == ownerId)
                .FirstOrDefault();

            var category = _context.Categories
                .Where(c => c.Id == categoryId)
                .FirstOrDefault();

            var pokemonOwner = new PokemonOwner()
            {
                Owner = pokemonOwnerEntity,
                Pokemon = pokemon
            };

            _context.Add(pokemonOwner);

            var pokemonCategory = new PokemonCategory()
            {
                Category = category,
                Pokemon = pokemon
            };

            _context.Add(pokemonCategory);

            _context.Add(pokemon);

            return Save();
        }

        public bool Update(int ownerId, int categoryId, Pokemon pokemon)
        {
            _context.Update(pokemon);

            return Save();
        }

        public bool Delete(Pokemon pokemon)
        {
            _context.Remove(pokemon);

            return Save();
        }
    }
}
