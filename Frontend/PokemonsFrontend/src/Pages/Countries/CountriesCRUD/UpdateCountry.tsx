import axios from "axios";
import { useState } from "react";
import { countriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../../ResponseMessages";

const UpdateCountry = () => {
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
    if (!country.name?.trim()) {
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
            Update a country
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Country succesfully updated!"}
        />
      </div>
    </>
  );
};

export default UpdateCountry;
