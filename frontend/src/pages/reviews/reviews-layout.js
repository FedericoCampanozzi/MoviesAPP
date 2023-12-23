import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  getMovieAPI,
  updateMovieLikeAPI,
  putReviewAPI,
} from "../../shared/api";
import ReviewsTable from "./partial/reviews-table/reviews-table";
import ReviewForm from "./partial/review-form/review-form";
import React from "react";
import "./reviews-layout.css";
import { useSharedState } from "../../shared/state-context";

const ReviewsLayout = () => {
  const movieId = useParams().movieId;
  const { movie, setMovie, setReviews, reviewBody } = useSharedState();
  useEffect(() => {
    getMovieAPI(movieId, setMovie, setReviews);
  }, []);
  const putReview = async () => {
    putReviewAPI(reviewBody, movie.imdbId);
    window.location.reload();
  }
  const updateMovieLike = async () => {
    updateMovieLikeAPI(movie, setMovie);
    window.location.reload();
  }
  return (
    <Container>
      <Row key={"header_row"}>
        <Col style={{ maxHeight: "60px" }} key={"c00"}>
          <span className="movie-title">
            {movie?.title}
          </span>
          <Button
            variant="outline-primary"
            className={
              movie?.liked
                ? "like-btn movie-liked"
                : "like-btn movie-unliked"
            }
            onClick={updateMovieLike}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </Col>
      </Row>
      <Row className="mt-2" key={"r1"}>
        <Col key={"r10"}>
          <img
            className="thumb-image"
            src={movie?.poster}
            alt={movie?.title}
          />
        </Col>
        <Col key={"r11"}>
          <Row key={"r4"}>
            <Col key={"r40"}>
              <ReviewForm
                submitFunction={putReview}
                label="Write a Review?"
                controlId="AddReview"
              />
            </Col>
          </Row>
          <Row key={"r5"}>
            <Col key={"c50"}>
              <hr />
            </Col>
          </Row>
          <Row key={"r6"}>
            <Col key={"c60"}>
              <ReviewsTable />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewsLayout;
