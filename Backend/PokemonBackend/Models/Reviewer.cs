namespace PokemonBackend.Models
{
    public class Reviewer : BaseModel
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public ICollection<Review>? Reviews { get; set; }
    }
}
