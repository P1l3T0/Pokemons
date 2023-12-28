import axios from "axios";
import { useState } from "react";
import GetDataByID from "../../Helpers/GetDataByID";
import { ownersEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const DeleteOwner = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const deleteOwnerAsync = async () => {
    await axios
      .delete(`${ownersEndPoint}/${id}`)
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
          buttonText={"Delete an owner"}
          onClick={deleteOwnerAsync}
        />

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Owner succesfully deleted!"}
        />
      </div>
    </>
  );
};

export default DeleteOwner;
