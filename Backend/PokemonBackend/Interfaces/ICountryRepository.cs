using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICountryRepository : ICRUDRepository<Country>
    {
        Country GetCountryByOwner(int ownerId);
        ICollection<Owner> GetOwnersFromCountry(int countryId);
    }
}
