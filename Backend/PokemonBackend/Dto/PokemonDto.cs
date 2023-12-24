namespace PokemonBackend.Dto
{
    public class PokemonDto : BaseDto
    {
        public string? Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
