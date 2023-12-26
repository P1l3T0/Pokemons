import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { allCities } from "../endpoints";

const Cities = () => {
  type CityObject = {
    name: string;
    id: number;
  };

  const [data, setData] = useState<CityObject[] | null>(null);

  const handleClickAsync = async () => {
    await axios
      .get(allCities)
      .then((res: AxiosResponse<CityObject[]>) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={handleClickAsync}>Get all Cities</button>

      <ul>
        {data?.map((response) => (
          <li key={response?.id}>{response?.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cities;
