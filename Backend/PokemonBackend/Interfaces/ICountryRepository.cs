using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICountryRepository
    {
        bool CountryExists(int id);
        Country GetCountry(int id);
        Country GetCountryByOwner(int ownerId);
        ICollection<Country> GetCountries();
        ICollection<Owner> GetOwnersFromCountry(int countryId);
    }
}
