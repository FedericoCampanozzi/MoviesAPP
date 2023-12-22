import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSharedState } from "../../../../shared/state-context";

let editReviewIndex = -1;

const ReviewsTable = () => {
  const { reviews } = useSharedState();
  const openEditReview = async (event, review, index) => {
    event.preventDefault();
    editReviewIndex = index;
    valueOfTextEdit = review.body;
    const rr = [...reviews];
    rr[index] = review;
    setReviews(rr);
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
                      handleSubmit={(e) => updateReview(e, r, i)}
                      revText={revText}
                      defaultValue={valueOfTextEdit}
                      labelText="Update current Review?"
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
                          onClick={(e) => openEditReview(e, r, i)}
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
                      onClick={(e) => deleteReview(e, r, i)}
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