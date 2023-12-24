using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PokemonBackend.Dto;
using PokemonBackend.Interfaces;
using PokemonBackend.Models;

namespace PokemonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IPokemonRepository _pokeRepository;
        private readonly IReviewRepository _reviewRepository;
        private readonly IReviewerRepository _reviewerRepository;

        public ReviewController(IReviewRepository reviewRepository, IMapper mapper, IPokemonRepository pokemonRepository, IReviewerRepository reviewerRepository)
        {
            _mapper = mapper;
            _pokeRepository = pokemonRepository;
            _reviewRepository = reviewRepository;
            _reviewerRepository = reviewerRepository;
        }

        [HttpGet]
        [ProducesResponseType(400)]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Review>))]
        public IActionResult GetReviews()
        {
            var reviews = _mapper.Map<List<ReviewDto>>(_reviewRepository.GetAll());

            if (!ModelState.IsValid)
                return BadRequest();

            return Ok(reviews);
        }

        [HttpGet("{reviewId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200, Type = typeof(Review))]
        public IActionResult GetReview(int reviewId)
        {
            if (!_reviewRepository.Exists(reviewId))
                return NotFound();

            var review = _mapper.Map<ReviewDto>(_reviewRepository.GetById(reviewId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(review);
        }

        [HttpGet("pokemon/{pokeId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Review>))]
        public IActionResult GetReviewsForPokemon(int pokeId)
        {
            if (!_reviewRepository.Exists(pokeId))
                return NotFound();

            var reviews = _mapper.Map<List<ReviewDto>>(_reviewRepository.GetReviewsForPokemon(pokeId));

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(reviews);
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateReview([FromQuery] int reviewerId, [FromQuery] int pokemonId, [FromBody] ReviewDto reviewCreate)
        {
            if (reviewCreate == null)
                return BadRequest();

            var reviewDuplicate = _reviewRepository
                .GetAll()
                .Where(r => r.Title!.Trim().ToLower().Equals(reviewCreate.Title!.Trim().ToLower(), StringComparison.CurrentCultureIgnoreCase))
                .FirstOrDefault();

            if (reviewDuplicate != null)
            {
                ModelState.AddModelError("", "Review already exists");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var reviewMap = _mapper.Map<Review>(reviewCreate);

            reviewMap.Pokemon = _pokeRepository.GetPokemon(pokemonId);
            reviewMap.Reviewer = _reviewerRepository.GetById(reviewerId);

            if (!_reviewRepository.Create(reviewMap))
            {
                ModelState.AddModelError("", "Something went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Succesfully created!");
        }

        [HttpPut("{reviewId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateReview(int reviewId, [FromBody] ReviewDto updatedReview)
        {
            if (updatedReview == null || reviewId != updatedReview.Id)
                return BadRequest(ModelState);

            if (!_reviewRepository.Exists(reviewId))
                return NotFound();

            var reviewMap = _mapper.Map<Review>(updatedReview);

            if (!_reviewRepository.Update(reviewMap))
            {
                ModelState.AddModelError("", "Something went wrong while updating");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
