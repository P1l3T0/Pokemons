import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { reviewsEndPoint } from '../../../endpoints';
import ResponseMessages from '../../Helpers/ResponseMessages';

const GetAllReviews = () => {
  const [error, setError] = useState(false);
  const [review, setReview] = useState<ReviewObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllReviewsAsync = async () => {
    await axios
      .get(reviewsEndPoint)
      .then((res: AxiosResponse<ReviewObject[]>) => {
        setReview(res.data);
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
          <button className="get" onClick={getAllReviewsAsync}>
            Get all Reviews
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={review}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllReviews;