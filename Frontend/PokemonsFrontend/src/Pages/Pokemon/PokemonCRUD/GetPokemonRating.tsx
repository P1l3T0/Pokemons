import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { pokemonEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetPokemonRating = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [pokemonRating, setPokemonRating] = useState<Rating>();

  const getPokemonRatingAsync = async () => {
    await axios
      .get(`${pokemonEndPoint}/${id}/rating`)
      .then((res: AxiosResponse<number>) => {
        setPokemonRating({
          rating: res.data,
          type: "Rating"
        });
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
          onClick={getPokemonRatingAsync}
        />

        <ResponseMessages
          error={error}
          data={pokemonRating}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetPokemonRating;
