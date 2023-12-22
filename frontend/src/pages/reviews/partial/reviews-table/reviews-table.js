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
      {reviews?.map((r, i) => {
        return (
          <>
            <Row key={`r6${i}`}>
              <Col key={`c6${i}`}>
                {editReviewIndex === i ? (
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
                    {r.body}
                    {editReviewIndex === -1 ? (
                      <>
                        <Button
                          variant="outline-info"
                          className="small-button"
                          onClick={() => {
                            setEditReviewIndex(i);
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
                      onClick={(e) => deleteReview(r.reviewId, i)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </>
                )}
              </Col>
            </Row>
            <Row key={`r7${i}`}>
              <Col className="data-title" key={`c7${i}`}>
                {r.created != null ? (
                  <>{new Date(r.created).toLocaleString()}</>
                ) : (
                  <>Now</>
                )}
              </Col>
            </Row>
            <Row key={`r8${i}`}>
              <Col key={`c8${i}`}>
                <hr />
              </Col>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default ReviewsTable;
