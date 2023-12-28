import axios from "axios";
import { useState } from "react";
import GetDataByID from "../../Helpers/GetDataByID";
import { reviewersEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const DeleteReviewer = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const deleteReviewerAsync = async () => {
    await axios
      .delete(`${reviewersEndPoint}/${id}`)
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
          buttonText={"Delete a reviewer"}
          onClick={deleteReviewerAsync}
        />

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Reviewer succesfully deleted!"}
        />
      </div>
    </>
  );
};

export default DeleteReviewer;
