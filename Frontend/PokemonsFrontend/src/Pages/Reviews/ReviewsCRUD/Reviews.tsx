import GetAllReviews from "./GetAllReviews";
import GetReviewById from "./GetReviewerByID";

const Reviews = () => {
  return (
    <>
      <div>
        <div>
          <h1>Reviews</h1>
          <GetAllReviews />
          <GetReviewById />
        </div>
      </div>
    </>
  );
};

export default Reviews;
