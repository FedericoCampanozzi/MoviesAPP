import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenresFilter from "../genres-filter/genres-filter";
import MovieLikedTable from "../movies-liked-table/movies-liked-table";

const Favorite = ({ genres, likedMovies }) => {
  return (
    <Container>
      <Row>
        <Col>
          <GenresFilter genres={genres} />
        </Col>
        <Col sm={8}>
            <MovieLikedTable likedMovies={likedMovies} />
        </Col>
      </Row>
    </Container>
  );
};

export default Favorite;
