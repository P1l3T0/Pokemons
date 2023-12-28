import CreateReviewer from "./ReviewersCRUD/CreateReviewer";
import GetAllReviewers from "./ReviewersCRUD/GetAllReviewers";
import GetReviewerById from "./ReviewersCRUD/GetReviewerByID";

const Reviewwers = () => {
  return (
    <>
      <div>
        <div>
          <h1>Reviewers</h1>
          <GetAllReviewers />
          <GetReviewerById />
          <CreateReviewer />
        </div>
      </div>
    </>
  )
}

export default Reviewwers;