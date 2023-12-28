import axios from "axios";
import { useState } from "react";
import { reviewersEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const UpdateReviewer = () => {
  const [error, setError] = useState(false);
  const [reviewer, setReviewer] = useState<ReviewerObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();
    setReviewer({
      ...reviewer,
      [e.target.name]: trimmedValue
    })
  };

  const updateReviewerAsync = async () => {
    if (!reviewer?.firstName?.trim() || !reviewer?.lastName?.trim()) {
      setError(true);
      return;
    }

    await axios
      .put(`${reviewersEndPoint}/${reviewer.id}`, reviewer)
      .then(() => {
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : ""
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
            type="number"
            name="id"
            onChange={onChange}
            placeholder="Reviewer ID"
          />
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
          <button className="put" onClick={updateReviewerAsync}>
            Update an owner
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter valid data or ID!"
          successMessage={"Reviewer succesfully updated!"}
        />
      </div>
    </>
  );
};

export default UpdateReviewer;
