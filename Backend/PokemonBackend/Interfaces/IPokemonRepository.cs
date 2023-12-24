using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IPokemonRepository
    {
        bool Save();
        bool PokemonExists (int pokeId);
        decimal GetPokemonRating(int pokeId);
        Pokemon GetPokemon(int id);
        Pokemon GetPokemon(string name);
        ICollection<Pokemon> GetPokemons();
        bool CreatePokemon(int ownerId, int categoryId, Pokemon pokemon);
        bool UpdatePokemon(int ownerId, int categoryId, Pokemon pokemon);
    }
}
