import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { countriesEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetCountryById = () => {
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
        <GetDataByID
          setId={setId}
          httpMethod={"get"}
          buttonText={"Get country by ID"}
          onClick={getCountryByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={country}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetCountryById;
