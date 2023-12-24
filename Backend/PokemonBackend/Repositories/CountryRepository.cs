using PokemonBackend.Data;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly DataContext _context;

        public CountryRepository(DataContext context)
        {
            _context = context;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0;
        }

        public bool Exists(int countryId)
        {
            return _context.Countries.Any(c => c.Id == countryId);
        }

        public bool Delete(int countryId)
        {
            throw new NotImplementedException();
        }

        public bool Create(Country country)
        {
            _context.Add(country);

            return Save();
        }

        public bool Update(Country country)
        {
            _context.Update(country);

            return Save();
        }

        public Country GetById(int countryId)
        {
            return _context.Countries
                .Where(c => c.Id == countryId)
                .FirstOrDefault()!;
        }

        public ICollection<Country> GetAll()
        {
            return _context.Countries.ToList();
        }

        public Country GetCountryByOwner(int ownerId)
        {
            return _context.Owners
                .Where(o => o.Id == ownerId)
                .Select(c => c.Country)
                .FirstOrDefault()!;
        }

        public ICollection<Owner> GetOwnersFromCountry(int countryId)
        {
            return _context.Owners
                .Where(c => c.Country!.Id == countryId)
                .ToList();
        }
    }
}
