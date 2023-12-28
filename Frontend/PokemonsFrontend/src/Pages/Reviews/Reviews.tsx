import CreateReview from "./ReviewsCRUD/CreateReview";
import DeleteReview from "./ReviewsCRUD/DeleteReview";
import GetAllReviews from "./ReviewsCRUD/GetAllReviews";
import GetReviewById from "./ReviewsCRUD/GetReviewerByID";
import UpdateReview from "./ReviewsCRUD/UpdateReview";

const Reviews = () => {
  return (
    <>
      <div>
        <div>
          <h1>Reviews</h1>
          <GetAllReviews />
          <GetReviewById />
          <CreateReview />
          <UpdateReview />
          <DeleteReview />
        </div>
      </div>
    </>
  );
};

export default Reviews;
