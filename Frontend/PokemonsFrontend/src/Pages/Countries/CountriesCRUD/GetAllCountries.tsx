import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { countriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../CountryHelpers/ResponseMessages";

const GetAllCountries = () => {
  type CountryObject = {
    id: number;
    name: string;
  };

  const [error, setError] = useState(false);
  const [country, setCountry] = useState<CountryObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllCountriesAsync = async () => {
    await axios
      .get(countriesEndPoint)
      .then((res: AxiosResponse<CountryObject[]>) => {
        setCountry(res.data);
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
          <button className="get" onClick={getAllCountriesAsync}>
            Get all Countries
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={country}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllCountries;
