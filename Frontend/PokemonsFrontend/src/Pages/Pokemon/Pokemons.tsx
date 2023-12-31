import CreatePokemon from "./PokemonCRUD/CreatePokemon";
import GetAllPokemon from "./PokemonCRUD/GetAllPokemons";
import GetPokemonById from "./PokemonCRUD/GetPokemonById";
import GetPokemonRating from "./PokemonCRUD/GetPokemonRating";

const Pokeomons = () => {
  return (
    <>
      <div>
        <div>
          <h1>Pokemons</h1>
          <GetAllPokemon />
          <GetPokemonById />
          <GetPokemonRating />
          <CreatePokemon />
        </div>
      </div>
    </>
  );
};

export default Pokeomons;
