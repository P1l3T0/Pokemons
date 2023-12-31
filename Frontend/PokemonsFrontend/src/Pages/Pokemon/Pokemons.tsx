import GetAllPokemon from "./PokemonCRUD/GetAllPokemons";
import GetPokemonById from "./PokemonCRUD/GetPokemonById";

const Pokeomons = () => {
  return (
    <>
      <div>
        <div>
          <h1>Pokemons</h1>
          <GetAllPokemon />
          <GetPokemonById />
        </div>
      </div>
    </>
  );
};

export default Pokeomons;
