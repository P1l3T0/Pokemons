import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { reviewersEndPoint } from '../../../endpoints';
import ResponseMessages from '../../Helpers/ResponseMessages';

const GetAllReviewers = () => {
  const [error, setError] = useState(false);
  const [reviewer, setReviewer] = useState<ReviewerObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllCountriesAsync = async () => {
    await axios
      .get(reviewersEndPoint)
      .then((res: AxiosResponse<ReviewerObject[]>) => {
        console.log(res.data);
        setReviewer(res.data);
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
          <button className="get" onClick={getAllCountriesAsync}>
            Get all Reviewers
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={reviewer}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllReviewers;