import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenresFilter from "../genres-filter/genres-filter";
import MovieLikedTable from "../movies-liked-table/movies-liked-table";

const Favorite = ({ genres, likedMovies, setLikedMovies, setGenres }) => {
  return (
    <Container>
      <Row>
        <Col>
          <GenresFilter
            genres={genres}
            likedMovies={likedMovies}
            setLikedMovies={setLikedMovies}
            setGenres={setGenres}
          />
        </Col>
        <Col sm={8}>
          <MovieLikedTable likedMovies={likedMovies} />
        </Col>
      </Row>
    </Container>
  );
};

export default Favorite;
