import axios from "axios";
import { useState } from "react";
import { countriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../CountryHelpers/ResponseMessages";

const CreateCountry = () => {
  type CountryObject = {
    id: number;
    name: string;
  };

  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [country, setCountry] = useState<CountryObject>({
    id: 0,
    name: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();
    setCountry({
      ...country,
      [e.target.name]: trimmedValue,
    });
  };

  const createCountryAsync = async () => {
    if (!country.name.trim()) {
      setError(true);
      return;
    }

    await axios
      .post(`${countriesEndPoint}`, country)
      .then(() => {
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
            onChange={onChange}
            placeholder="Country name goes here"
          />
          <button className="post" onClick={createCountryAsync}>
            Create a country
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Empty values not allowed!"
          successMessage={"Succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreateCountry;
