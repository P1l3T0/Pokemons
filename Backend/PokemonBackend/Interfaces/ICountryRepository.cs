using PokemonBackend.Models;

namespace PokemonBackend.Interfaces
{
    public interface ICountryRepository : IBaseRepository
    {
        bool CountryExists(int id);
        Country GetCountry(int id);
        Country GetCountryByOwner(int ownerId);
        ICollection<Country> GetCountries();
        ICollection<Owner> GetOwnersFromCountry(int countryId);
        bool CreateCountry(Country country);
        bool UpdateCountry(Country country);
    }
}
