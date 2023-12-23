import React from "react";
import { Row, Col } from "react-bootstrap";
import './movies-liked-table.css';
import { useSharedState } from "../../../../shared/state-context";

const MovieLikedTable = () => {
  const { liked_filtered_movies } = useSharedState();
  return (
    <>
      {liked_filtered_movies?.map((movie, mIndex) => {
        return (
          <Row key={mIndex} className="card-movie-container">
            <Col>
              <img src={movie.poster} alt="" className="card-move-image" />
            </Col>
            <Col>
              <p>
                Title:<br />
                <span className="card-movie-title">{movie.title}</span>
              </p>
              <p>
                Data Release:<br />
                <span className="card-movie-release-date">{movie.releaseDate}</span>
              </p>
              <div className="card-movie-genres-container">
                Genres:
                {movie.genres.map((gender, gIndex) => {
                  return (
                    <Row key={`r_gen_${gIndex}`}>
                      <Col key={`c_gen_${gIndex}`}>{gender}</Col>
                    </Row>
                  );
                })}
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default MovieLikedTable;