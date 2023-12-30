namespace PokemonBackend.Dto
{
    public class ReviewerDto : BaseDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string Type { get; } = "Reviewer";
    }
}
