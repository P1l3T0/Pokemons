using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PokemonBackend.Dto;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;
using PokemonBackend.Repositories;

namespace PokemonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IReviewRepository _reviewRepository;
        private readonly IOwnerRepository _ownerRepository;
        private readonly IPokemonRepository _pokemonRepository;

        public PokemonController(IPokemonRepository pokemonRepository, IMapper mapper, IOwnerRepository ownerRepository, IReviewRepository reviewRepository)
        {
            _mapper = mapper;
            _ownerRepository = ownerRepository;
            _reviewRepository = reviewRepository;
            _pokemonRepository = pokemonRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Pokemon>))]
        public IActionResult GetPokeomns()
        {
            var pokemon = _mapper.Map<List<PokemonDto>>(_pokemonRepository.GetPokemons());

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(pokemon);
        }

        [HttpGet("{pokeId}")]
        [ProducesResponseType(200, Type=typeof(Pokemon))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemon(int pokeId)
        {
            if (!_pokemonRepository.PokemonExists(pokeId))
                return NotFound();

            var pokemon = _mapper.Map<PokemonDto>(_pokemonRepository.GetPokemon(pokeId));

            if (!ModelState.IsValid) 
                return BadRequest(ModelState);

            return Ok(pokemon);
        }

        [HttpGet("{pokeId}/rating")]
        [ProducesResponseType(200, Type=typeof(decimal))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonRating(int pokeId)
        {
            if (!_pokemonRepository.PokemonExists(pokeId))
                return NotFound();

            var rating = _pokemonRepository.GetPokemonRating(pokeId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(rating);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatePokemon([FromQuery] int ownerId, [FromQuery] int categoryId, [FromBody] PokemonDto pokemonCreate)
        {
            if (pokemonCreate == null)
                return BadRequest();

            var pokemonDuplicate = _pokemonRepository
                .GetPokemons()
                .Where(p => p.Name!.Trim().ToLower().Equals(pokemonCreate.Name!.Trim().ToLower(), StringComparison.CurrentCultureIgnoreCase))
                .FirstOrDefault();

            if (pokemonDuplicate != null)
            {
                ModelState.AddModelError("", "Pokemon already exists");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var pokemonMap = _mapper.Map<Pokemon>(pokemonCreate);

            if (!_pokemonRepository.CreatePokemon(ownerId, categoryId, pokemonMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Succesfully created!");
        }

        [HttpPut("{pokemonId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCategory(int pokemonId, [FromQuery] int ownerId, [FromQuery] int categoryId, [FromBody] PokemonDto updatedPokemon)
        {
            if (updatedPokemon == null || pokemonId != updatedPokemon.Id)
                return BadRequest(ModelState);

            if (!_pokemonRepository.PokemonExists(pokemonId))
                return NotFound();

            var pokemonMap = _mapper.Map<Pokemon>(updatedPokemon);

            if (!_pokemonRepository.UpdatePokemon(ownerId, categoryId, pokemonMap))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
