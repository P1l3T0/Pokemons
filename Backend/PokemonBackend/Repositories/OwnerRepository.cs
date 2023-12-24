using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class OwnerRepository : SaveRepository, IOwnerRepository
    {
        private readonly DataContext _context;

        public OwnerRepository(DataContext context) : base(context) 
        {
            _context = context;
        }

        public bool Exists(int ownerId)
        {
            return _context.Owners.Any(o => o.Id == ownerId);
        }

        public bool Create(Owner owner)
        {
            _context.Add(owner);

            return Save();
        }

        public bool Update(Owner owner)
        {
            _context.Update(owner);

            return Save();
        }

        public bool Delete(Owner owner)
        {
            _context.Remove(owner);

            return Save();
        }

        public bool DeleteOwners(ICollection<Owner> owners)
        {
            _context.RemoveRange(owners);

            return Save();
        }

        public Owner GetById(int ownerId)
        {
            return _context.Owners
                .Where(o => o.Id == ownerId)
                .FirstOrDefault()!;
        }

        public ICollection<Owner> GetAll()
        {
            return _context.Owners.ToList();
        }

        public ICollection<Owner> GetOwnerOfPokemon(int pokeId)
        {
            return _context.PokemonOwners
                .Where(p => p.Pokemon!.Id == pokeId)!
                .Select(o => o.Owner)
                .ToList()!;
        }

        public ICollection<Pokemon> GetPokemonByOwner(int ownerId)
        {
            return _context.PokemonOwners
                .Where(p => p.Pokemon!.Id == ownerId)
                .Select(p => p.Pokemon)
                .ToList()!;
        }
    }
}
