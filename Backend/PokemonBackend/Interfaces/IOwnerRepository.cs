using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IOwnerRepository : ICRUDRepository<Owner>
    {
        ICollection<Owner> GetOwnerOfPokemon(int pokeId);
        ICollection<Pokemon> GetPokemonByOwner(int ownerId);
    }
}
