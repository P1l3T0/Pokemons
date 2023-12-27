import axios from "axios";
import { useState } from "react";
import { countriesEndPoint } from "../../../endpoints";

const UpdateCountry = () => {
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
      [e.target.name]: trimmedValue
    })
  };

  const updateCountryAsync = async () => {
    if (!country.name.trim()) {
      setError(true);
      return;
    }

    await axios
      .put(`${countriesEndPoint}/${country.id}`, country)
      .then(() => {
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : ""
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
            type="number"
            name="id"
            onChange={onChange}
            placeholder="Country ID goes here"
          />
          <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="Country name goes here"
          />
          <button className="put" onClick={updateCountryAsync}>
            Create a country
          </button>
        </div>

        {error ? (
          <div>
            <h3>Enter valid values!</h3>
          </div>
        ) : initiallyClicked ? (
          <div>
            <h3>Succesfully updated!</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UpdateCountry;
