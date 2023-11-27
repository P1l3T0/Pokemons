using Microsoft.AspNetCore.Mvc;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {
        private readonly IPokemonRepository _pokemonRepository;

        public PokemonController(IPokemonRepository pokemonRepository)
        {
            _pokemonRepository = pokemonRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Pokemon>))]
        public IActionResult GetPokeomns()
        {
            var pokemon = _pokemonRepository.GetPokemons();

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            return Ok(pokemon);
        }
    }
}
