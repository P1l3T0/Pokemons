namespace PokemonBackend.Dto
{
    public class CategoryDto : BaseDto
    {
        public string? Name { get; set; }
        public string Type { get; } = "Category";
    }
}
