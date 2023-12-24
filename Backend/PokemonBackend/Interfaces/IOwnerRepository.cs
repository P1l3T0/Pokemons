using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IOwnerRepository : ICRUDRepository<Owner>
    {
        bool DeleteOwners(ICollection<Owner> owners);
        ICollection<Owner> GetOwnerOfPokemon(int pokeId);
        ICollection<Pokemon> GetPokemonByOwner(int ownerId);
    }
}
