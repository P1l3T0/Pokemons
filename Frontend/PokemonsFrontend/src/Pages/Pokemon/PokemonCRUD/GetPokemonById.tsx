import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { pokemonEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetPokemonById = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonObject>();

  const getPokemonByIdAsync = async () => {
    await axios
      .get(`${pokemonEndPoint}/${id}`)
      .then((res: AxiosResponse<PokemonObject>) => {
        setPokemon(res.data);
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : "";
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <div className="container">
        <GetDataByID
          setId={setId}
          httpMethod={"get"}
          buttonText={"Get pokemon by ID"}
          onClick={getPokemonByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={pokemon}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetPokemonById;
