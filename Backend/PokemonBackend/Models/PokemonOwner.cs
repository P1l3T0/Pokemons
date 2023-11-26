namespace PokemonBackend.Models
{
    public class PokemonOwner
    {
        public int PokemonId { get; set; }
        public int OwnerId{ get; set; }
        public Pokemon? Category { get; set; }
        public Owner? Owner { get; set; }
    }
}
