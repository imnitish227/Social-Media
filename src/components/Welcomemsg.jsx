import { useEffect } from "react";

const Welcomemsg = ({ handleApiclick }) => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">No Posts</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Here is no any post you can create using create post and click on
            below button to generate random posts
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={handleApiclick}
            >
              Generate Posts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcomemsg;
