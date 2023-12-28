import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { reviewsEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetReviewById = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [review, setReview] = useState<ReviewObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getReviewByIdAsync = async () => {
    await axios
      .get(`${reviewsEndPoint}/${id}`)
      .then((res: AxiosResponse<ReviewObject>) => {
        setReview(res.data);
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
          httpMethod={"get"}
          buttonText={"Get review by ID"}
          onClick={getReviewByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={review}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetReviewById;
