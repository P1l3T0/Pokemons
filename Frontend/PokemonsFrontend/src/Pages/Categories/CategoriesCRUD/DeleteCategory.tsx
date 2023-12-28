import axios from "axios";
import { useState } from "react";
import GetDataByID from "../../Helpers/GetDataByID";
import { categoriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const DeleteCategory = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const deleteCountryAsync = async () => {
    await axios
      .delete(`${categoriesEndPoint}/${id}`)
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
        <GetDataByID
          setId={setId}
          httpMethod={"delete"}
          buttonText={"Delete a category"}
          onClick={deleteCountryAsync}
        />

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Category succesfully deleted!"}
        />
      </div>
    </>
  );
};

export default DeleteCategory;
