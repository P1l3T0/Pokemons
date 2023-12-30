import axios from "axios";
import { useState } from "react";
import GetDataByID from "../../Helpers/GetDataByID";
import { reviewsEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const DeleteReview = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const deleteReviewAsync = async () => {
    await axios
      .delete(`${reviewsEndPoint}/${id}`)
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
          buttonText={"Delete a review"}
          onClick={deleteReviewAsync}
        />

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
          successMessage={"Review succesfully deleted!"}
        />
      </div>
    </>
  );
};

export default DeleteReview;
