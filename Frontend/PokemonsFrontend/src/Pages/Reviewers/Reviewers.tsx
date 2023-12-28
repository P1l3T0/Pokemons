import CreateReviewer from "./ReviewersCRUD/CreateReviewer";
import DeleteReviewer from "./ReviewersCRUD/DeleteReviewer";
import GetAllReviewers from "./ReviewersCRUD/GetAllReviewers";
import GetReviewerById from "./ReviewersCRUD/GetReviewerByID";
import UpdateReviewer from "./ReviewersCRUD/UpdateReviewer";

const Reviewwers = () => {
  return (
    <>
      <div>
        <div>
          <h1>Reviewers</h1>
          <GetAllReviewers />
          <GetReviewerById />
          <CreateReviewer />
          <UpdateReviewer />
          <DeleteReviewer />
        </div>
      </div>
    </>
  )
}

export default Reviewwers;