import axios from "axios";
import { useState } from "react";
import { reviewersEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const CreateReviewer = () => {
  const [error, setError] = useState(false);
  const [reviewer, setReviewer] = useState<ReviewerObject>()
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewer({
      ...reviewer,
      [e.target.name]: e.target.value,
    });
  };

  const createReviewerAsync = async () => {
    if (!reviewer?.firstName?.trim() || !reviewer?.lastName?.trim()) {
      setError(true);
      return;
    }

    await axios
      .post(`${reviewersEndPoint}`, reviewer)
      .then(() => {
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
          <input
            type="text"
            name="firstName"
            onChange={onChange}
            placeholder="Reviewer's first name"
          />
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            placeholder="Reviewer's last name"
          />
          <button className="post" onClick={createReviewerAsync}>
            Create a reviewer
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Invalid or duplicate value!"
          successMessage={"Reviewer succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreateReviewer;
