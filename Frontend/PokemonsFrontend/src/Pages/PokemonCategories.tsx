import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { categoriesEndPoint } from "../endpoints";

const PokemonCategories = () => {
  type PokemonObject = {
    id: number;
    name: string;
  };

  const [data, setData] = useState<PokemonObject[] | null>(null);

  const handleClickAsync = async () => {
    await axios
      .get(categoriesEndPoint)
      .then((res: AxiosResponse<PokemonObject[]>) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={handleClickAsync}>Get all Pokemon Categories</button>

      <ul>
        {data?.map((response) => (

          <li key={response?.id}>{response?.name}, ID: {response?.id}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonCategories;
