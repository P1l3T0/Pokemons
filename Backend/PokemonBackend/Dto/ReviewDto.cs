namespace PokemonBackend.Dto
{
    public class ReviewDto : BaseDto
    {
        public string? Title { get; set; }
        public string? Text { get; set; }
        public int Rating { get; set; }
    }
}
