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
    public class OwnerController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IOwnerRepository _ownerRepository;
        private readonly ICountryRepository _countryRepository;

        public OwnerController(IOwnerRepository ownerRepository, IMapper mapper, ICountryRepository countryRepository)
        {
            _mapper = mapper;
            _ownerRepository = ownerRepository;
            _countryRepository = countryRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Owner>))]
        public IActionResult GetOwners() 
        {
            var owners = _mapper.Map<List<OwnerDto>>(_ownerRepository.GetOwners());

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(owners);
        }

        [HttpGet("{ownerId}")]
        [ProducesResponseType(200, Type = typeof(Owner))]
        [ProducesResponseType(400)]
        public IActionResult GetOwner(int ownerId)
        {
            if (!_ownerRepository.OwnerExists(ownerId))
                return NotFound();

            var owner = _mapper.Map<OwnerDto>(_ownerRepository.GetOwner(ownerId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(owner);
        }

        [HttpGet("{ownerId}/pokemon")]
        [ProducesResponseType(200, Type = typeof(Owner))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonByOwner(int ownerId)
        {
            if (!_ownerRepository.OwnerExists(ownerId))
                return NotFound();

            var owner = _mapper.Map<List<PokemonDto>>(_ownerRepository.GetPokemonByOwner(ownerId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(owner);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateOwner([FromQuery] int countryId, [FromBody] OwnerDto ownerCreate)
        {
            if (ownerCreate == null)
                return BadRequest();

            var ownerDuplicate = _ownerRepository
                .GetOwners()
                .Where(o => o.LastName!.Trim().ToLower().Equals(ownerCreate.LastName!.Trim().ToLower(), StringComparison.CurrentCultureIgnoreCase))
                .FirstOrDefault();

            if (ownerDuplicate != null)
            {
                ModelState.AddModelError("", "Owner already exists");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var ownerMap = _mapper.Map<Owner>(ownerCreate);
            ownerMap.Country = _countryRepository.GetCountry(countryId);

            if (!_ownerRepository.CreateOwner(ownerMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Succesfully created!");
        }

        [HttpPut("{ownerId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCategory(int ownerId, [FromBody] OwnerDto updatedOwner)
        {
            if (updatedOwner == null || ownerId != updatedOwner.Id)
                return BadRequest(ModelState);

            if (!_ownerRepository.OwnerExists(ownerId))
                return NotFound();

            var ownerMap = _mapper.Map<Owner>(updatedOwner);

            if (!_ownerRepository.UpdateOwner(ownerMap))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
