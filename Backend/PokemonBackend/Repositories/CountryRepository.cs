using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class CountryRepository : BaseRepository, ICountryRepository
    {
        private readonly DataContext _context;

        public CountryRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public bool CountryExists(int id)
        {
            return _context.Countries.Any(c => c.Id == id);
        }

        public Country GetCountry(int id)
        {
            return _context.Countries
                .Where(c => c.Id == id)
                .FirstOrDefault()!;
        }

        public Country GetCountryByOwner(int ownerId)
        {
            return _context.Owners
                .Where(o => o.Id == ownerId)
                .Select(c => c.Country)
                .FirstOrDefault()!;
        }

        public ICollection<Country> GetCountries()
        {
            return _context.Countries.ToList();
        }

        public ICollection<Owner> GetOwnersFromCountry(int countryId)
        {
            return _context.Owners
                .Where(c => c.Country!.Id == countryId)
                .ToList();
        }

        public bool CreateCountry(Country country)
        {
            _context.Add(country);

            return Save();
        }
    }
}
