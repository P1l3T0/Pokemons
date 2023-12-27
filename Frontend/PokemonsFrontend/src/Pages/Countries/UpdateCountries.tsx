import axios from "axios";
import { useState } from "react";
import { countriesEndPoint } from "../../endpoints";

const UpdateCountry = () => {
  type CountryObject = {
    id: number;
    name: string;
  };

  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [updatedCountry, setUpdatedCountry] = useState<CountryObject>({
    id: 0,
    name: "",
  });

  const onChange = (e: any) => {
    if (e.target.value !== "") {
      setUpdatedCountry({
        ...updatedCountry,
        [e.target.name]: e.target.value
      })
    }
  };

  const updateCountryAsync = async () => {
    await axios
      .put(`${countriesEndPoint}/${updatedCountry.id}`, updatedCountry)
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
            placeholder="Country id goes here"
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
            <h3>Empty values not allowed!</h3>
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
