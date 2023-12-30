import axios from "axios";
import { useState } from "react";
import { reviewsEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const UpdateReview = () => {
  const [error, setError] = useState(false);
  const [review, setReview] = useState<ReviewObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setReview({
      ...review,
      [e.target.name]: trimmedValue
    })
  };

  const updateReviewAsync = async () => {
    if ((!review?.title?.trim() || !review?.text?.trim()) || Number(review?.rating) < 0) {
      setError(true);
      return;
    }

    await axios
      .put(`${reviewsEndPoint}/${review?.id}`, review)
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
            placeholder="Review ID goes here"
          />
          <input
            type="text"
            name="title"
            onChange={onChange}
            placeholder="Review title goes here"
          />
          <input
            type="text"
            name="text"
            onChange={onChange}
            placeholder="Review text goes here"
          />
          <input
            type="number"
            min={1}
            name="rating"
            onChange={onChange}
            placeholder="Rating goes here"
          />
          <button className="put" onClick={updateReviewAsync}>
            Update a review
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter valid data or ID!"
          successMessage={"Review succesfully updated!"}
        />
      </div>
    </>
  );
};

export default UpdateReview;
