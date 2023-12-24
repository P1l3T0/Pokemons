﻿using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class OwnerRepository : BaseRepository, IOwnerRepository
    {
        private readonly DataContext _context;

        public OwnerRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool OwnerExists(int ownerId)
        {
            return _context.Owners.Any(o => o.Id == ownerId);
        }

        public Owner GetOwner(int ownerId)
        {
            return _context.Owners
                .Where(o => o.Id == ownerId)
                .FirstOrDefault()!;
        }

        public ICollection<Owner> GetOwnerOfPokemon(int pokeId)
        {
            return _context.PokemonOwners
                .Where(p => p.Pokemon!.Id == pokeId)!
                .Select(o => o.Owner)
                .ToList()!;
        }

        public ICollection<Owner> GetOwners()
        {
            return _context.Owners.ToList();
        }

        public ICollection<Pokemon> GetPokemonByOwner(int ownerId)
        {
            return _context.PokemonOwners
                .Where(p => p.Pokemon!.Id == ownerId)
                .Select(p => p.Pokemon)
                .ToList()!;
        }

        public bool CreateOwner(Owner owner)
        {
            _context.Add(owner);

            return Save();
        }

        public bool UpdateOwner(Owner owner)
        {
            _context.Update(owner);

            return Save();
        }
    }
}
