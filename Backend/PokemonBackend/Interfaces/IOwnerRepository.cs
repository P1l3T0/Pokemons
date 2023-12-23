using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IOwnerRepository
    {
        bool OwnerExists(int ownerId);
        Owner GetOwner(int ownerId);
        ICollection<Owner> GetOwners();
        ICollection<Owner> GetOwnerOfPokemon(int pokeId);
        ICollection<Pokemon> GetPokemonByOwner(int ownerId);
    }
}
