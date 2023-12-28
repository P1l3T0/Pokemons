import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { reviewersEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetReviewerById = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [reviewer, setReviewer] = useState<OwnerObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getReviewerByIdAsync = async () => {
    await axios
      .get(`${reviewersEndPoint}/${id}`)
      .then((res: AxiosResponse<OwnerObject>) => {
        setReviewer(res.data);
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
          buttonText={"Get reviewer by ID"}
          onClick={getReviewerByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={reviewer}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetReviewerById;
