namespace PokemonBackend.Dto
{
    public class CountryDto : BaseDto
    {
        public string? Name { get; set; }
        public string Type { get; } = "Country";
    }
}
