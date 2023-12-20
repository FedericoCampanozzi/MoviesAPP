import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faTrash, faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";

import React from "react";

let editReviewIndex = -1;
let valueOfText = "";
let valueOfTextEdit = "";

const Reviews = ({ getMovieData, movie, reviews, setReviews, setMovie }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;
  const likedBtnCSS = movie?.liked ? "like-btn movie-liked" : "like-btn movie-unliked";

  useEffect(() => {
    getMovieData(movieId);
  }, []);



  const openEditReview = async (event, review, index) => {
    event.preventDefault();
    editReviewIndex = index;
    valueOfTextEdit = review.body;
    const rr = [...reviews];
    rr[index] = review;
    setReviews(rr);
  };






  return (
    <Container>
      <Row key={"r0"}>
        <Col style={{ maxHeight: "60px" }} key={"c00"}>
          <span className="movie-title">{movie?.title}</span>
          <Button
            variant="outline-primary"
            className={likedBtnCSS}
            onClick={updateMovieLike}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </Col>
      </Row>
      <Row className="mt-2" key={"r1"}>
        <Col key={"r10"}>
          <div className="img-border">
            {movie != null ? (
              <img src={movie.poster} alt={movie.title} />
            ) : (
              <></>
            )}
          </div>
        </Col>
        <Col key={"r11"}>
          <Row key={"r4"}>
            <Col key={"r40"}>
              <ReviewForm
                handleSubmit={addReview}
                revText={revText}
                defaultValue={valueOfText}
                labelText="Write a Review?"
              />
            </Col>
          </Row>
          <Row key={"r5"}>
            <Col key={"r50"}>
              <hr />
            </Col>
          </Row>
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
        </Col>
      </Row>
      <Row key={"r2"}>
        <Col key={"c20"}>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
