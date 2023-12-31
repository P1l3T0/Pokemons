import axios from "axios";
import { useState } from "react";
import { pokemonEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const CreatePokemon = () => {
  const [error, setError] = useState(false);
  const [ownerId, setOwnerId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [pokemon, setPokemon] = useState<PokemonObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    var value;

    switch (e.target.name) {
      case "name":
        value = e.target.value.trim();
        break;
      case "birthDate":
        value = new Date(e.target.value).toISOString();
        break;
      case "ownerId":
        setOwnerId(Number(e.target.value));
        break;
      case "categoryId":
        setCategoryId(Number(e.target.value));
        break;
    }

    setPokemon({
      ...pokemon,
      [e.target.name]: value,
    });
  };

  const createPokemonAsync = async () => {
    if (!pokemon?.name?.trim()) {
      setError(true);
      return;
    }

    await axios
      .post(`${pokemonEndPoint}?ownerId=${ownerId}&categoryId=${categoryId}`, pokemon)
      .then(() => {
        console.log(pokemon);
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
          <input
            type="text"
            name="name"
            onChange={onTextChange}
            placeholder="Pokemon name goes here"
          />
          <input
            type="datetime-local"
            name="birthDate"
            onChange={onTextChange}
            placeholder="BirthDate goes goes here"
          />
          <input
            type="number"
            min={1}
            name="ownerId"
            onChange={onTextChange}
            placeholder="Owner ID goes here"
          />
          <input
            type="number"
            min={1}
            name="categoryId"
            onChange={onTextChange}
            placeholder="Category ID goes here"
          />
          <button className="post" onClick={createPokemonAsync}>
            Create a pokemon
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Invalid or duplicate value!"
          successMessage={"Pokemon succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreatePokemon;
