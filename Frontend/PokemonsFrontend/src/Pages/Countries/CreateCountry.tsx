import { useState } from "react";
import { countriesEndPoint } from "../../endpoints";
import axios from "axios";

const CreateCountry = () => {
  type CountryObject = {
    id: number;
    name: string;
  };

  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [createdCountry, setCreatedCountry] = useState<CountryObject>({
    id: 0,
    name: "",
  });

  const onChange = (e: any) => {
    if (e.target.value !== "") {
      setCreatedCountry({
        ...createdCountry,
        name: e.target.value,
      });
    }
  };

  const createCountryAsync = async () => {
    await axios
      .post(`${countriesEndPoint}`, createdCountry)
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
            onChange={onChange}
            placeholder="Country name goes here"
          />
          <button className="post" onClick={createCountryAsync}>
            Create a country
          </button>
        </div>

        {error ? (
          <div>
            <h3>Empty values not allowed!</h3>
          </div>
        ) : initiallyClicked ? (
          <div>
            <h3>Succesfully created!</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CreateCountry;
