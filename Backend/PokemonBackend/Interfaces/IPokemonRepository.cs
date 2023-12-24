using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface IPokemonRepository
    {
        bool Exists (int pokeId);
        bool Create(int ownerId, int categoryId, Pokemon pokemon);
        bool Update(int ownerId, int categoryId, Pokemon pokemon);
        bool Delete(Pokemon pokemon);
        decimal GetPokemonRating(int pokeId);
        Pokemon GetById(int id);
        Pokemon GetPokemon(string name);
        ICollection<Pokemon> GetAll();
    }
}
