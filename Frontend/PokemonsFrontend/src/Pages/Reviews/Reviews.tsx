import CreateReview from "./ReviewsCRUD/CreateReview";
import GetAllReviews from "./ReviewsCRUD/GetAllReviews";
import GetReviewById from "./ReviewsCRUD/GetReviewerByID";

const Reviews = () => {
  return (
    <>
      <div>
        <div>
          <h1>Reviews</h1>
          <GetAllReviews />
          <GetReviewById />
          <CreateReview />
        </div>
      </div>
    </>
  );
};

export default Reviews;
