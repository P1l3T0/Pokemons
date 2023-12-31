import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { pokemonEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetAllPokemon = () => {
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllPokemonAsync = async () => {
    await axios
      .get(pokemonEndPoint)
      .then((res: AxiosResponse<PokemonObject[]>) => {
        console.log(res.data);
        setPokemon(res.data);
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : "";
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container-child-1">
          <button className="get" onClick={getAllPokemonAsync}>
            Get all Pokemon
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={pokemon}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllPokemon;
