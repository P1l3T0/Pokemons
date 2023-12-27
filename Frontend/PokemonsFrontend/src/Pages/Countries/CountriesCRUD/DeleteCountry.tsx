import axios from "axios";
import { useState } from "react";
import CountryID from "../CountryHelpers/CountryID";
import { countriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../CountryHelpers/ResponseMessages";

const DeleteCountry = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const deleteCountryAsync = async () => {
    await axios
      .delete(`${countriesEndPoint}/${id}`)
      .then(() => {
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
          httpMethod={"delete"}
          buttonText={"Delete a country"}
          onClick={deleteCountryAsync}
        />

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Succesfully deleted!"}
        />
      </div>
    </>
  );
};

export default DeleteCountry;
