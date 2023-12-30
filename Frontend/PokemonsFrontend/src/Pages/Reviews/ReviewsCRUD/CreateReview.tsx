import axios from "axios";
import { useState } from "react";
import { reviewsEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const CreateReview = () => {
  const [error, setError] = useState(false);
  const [review, setReview] = useState<ReviewObject>()
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const [reviewerId, setReviewerId] = useState(0);
  const [pokemonId, setPokemonId] = useState(0);

  const onChangeReviewerId = (e: React.ChangeEvent<HTMLInputElement>) => {
    var reviewIdNum = Number(e.target.value);

    setReviewerId(reviewIdNum);
  }

  const onChangePokemonId = (e: React.ChangeEvent<HTMLInputElement>) => {
    var pokemonIdNum = Number(e.target.value);

    setPokemonId(pokemonIdNum);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setReview({
      ...review,
      [e.target.name]: trimmedValue,
    });
  };

  const createReviewAsync = async () => {
    if ((!review?.title?.trim() || !review?.text?.trim())) {
      setError(true);
      return;
    }

    await axios
      .post(`${reviewsEndPoint}/?reviewerId=${reviewerId}&pokemonId=${pokemonId}`, review)
      .then(() => {
        setError(false);
        console.log(review);
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
            type="number"
            min={1}
            name="reviewerId"
            onChange={onChangeReviewerId}
            placeholder="Reviewer ID goes here"
          />
          <input
            type="number"
            min={1}
            name="pokemonId"
            onChange={onChangePokemonId}
            placeholder="Pokemon ID goes here"
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
          <button className="post" onClick={createReviewAsync}>
            Create a review
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Invalid or duplicate value!"
          successMessage={"Review succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreateReview;
