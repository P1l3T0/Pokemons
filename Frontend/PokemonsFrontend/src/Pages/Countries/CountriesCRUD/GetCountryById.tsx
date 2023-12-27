import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { countriesEndPoint } from "../../../endpoints";
import CountryID from "../CountryHelpers/CountryID";
import ResponseMessages from "../CountryHelpers/ResponseMessages";

const GetCountryById = () => {
  type CountryObject = {
    id: number;
    name: string;
  };

  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [country, setCountry] = useState<CountryObject>({
    id: 0,
    name: "",
  });

  const getCountryByIdAsync = async () => {
    await axios
      .get(`${countriesEndPoint}/${id}`)
      .then((res: AxiosResponse<CountryObject>) => {
        setCountry(res.data);
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
        <CountryID
          setId={setId}
          httpMethod={"get"}
          buttonText={"Get country by ID"}
          onClick={getCountryByIdAsync}
        />

        <ResponseMessages
          error={error}
          countries={country}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetCountryById;
