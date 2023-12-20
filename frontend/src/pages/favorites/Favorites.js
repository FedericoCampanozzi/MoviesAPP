import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenresFilter from "./partial/genres-filter/genres-filter";
import MovieLikedTable from "./partial/movies-liked-table/movies-liked-table";

const Favorites = () => {
  return (
    <Container>
      <Row>
        <Col>
          <GenresFilter />
        </Col>
        <Col sm={8}>
          <MovieLikedTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
