using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons();
    }
}
