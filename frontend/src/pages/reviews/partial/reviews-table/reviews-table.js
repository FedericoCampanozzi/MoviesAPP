import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSharedState } from "../../../../shared/state-context";
import ReviewForm from "../review-form/review-form";
import { deleteReviewAPI, updateReviewBodyAPI } from "../../../../shared/api";

const ReviewsTable = () => {
  const {
    reviews,
    reviewBody,
    setReviews,
    editReviewIndex,
    setEditReviewIndex,
  } = useSharedState();
  const updateReviewBody = async () => {
    updateReviewBodyAPI(reviews[editReviewIndex].reviewId, reviewBody);
    const r = [...reviews];
    r[editReviewIndex].body = reviewBody;
    setReviews(r);
    window.location.reload();
  };
  const deleteReview = async (reviewId, reviewIndex) => {
    let r = [...reviews];
    r.splice(reviewIndex, 1);
    setReviews(r);
    deleteReviewAPI(reviewId);
  };
  return (
    <>
      {reviews?.map((review, rIndex) => {
        return (
          <div key={`div_0_${rIndex}`}>
            <Row key={`r6${rIndex}`}>
              <Col key={`c6${rIndex}`}>
                {editReviewIndex === rIndex ? (
                  <>
                    <ReviewForm
                      initValue={reviews[editReviewIndex].body}
                      label="Update current Review?"
                      controlId="UpdateReview"
                      submitFunction={updateReviewBody}
                    />
                  </>
                ) : (
                  <>
                    {review.body}
                    {editReviewIndex === -1 ? (
                      <>
                        <Button
                          variant="outline-info"
                          className="small-button"
                          onClick={() => {
                            setEditReviewIndex(rIndex);
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                    <Button
                      variant="outline-warning"
                      className="small-button"
                      onClick={() => deleteReview(review.reviewId, rIndex)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </>
                )}
              </Col>
            </Row>
            <Row key={`r7${rIndex}`}>
              <Col className="data-title" key={`c7${rIndex}`}>
                {review.created != null ? (
                  <>{new Date(review.created).toLocaleString()}</>
                ) : (
                  <>Now</>
                )}
              </Col>
            </Row>
            <Row key={`r8${rIndex}`}>
              <Col key={`c8${rIndex}`}>
                <hr />
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default ReviewsTable;
