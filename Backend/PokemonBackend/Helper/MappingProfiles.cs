using AutoMapper;
using PokemonBackend.Dto;
using PokemonBackend.Models;

namespace PokemonBackend.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Pokemon, PokemonDto>();
        }
    }
}
