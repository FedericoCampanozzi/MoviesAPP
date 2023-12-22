import React from "react";
import { Row, Col } from "react-bootstrap";
import './movies-liked-table.css';
import { useSharedState } from "../../../../shared/state-context";

const MovieLikedTable = () => {
  const { liked_filtered_movies } = useSharedState();
  return (
    <>
      {liked_filtered_movies?.map((m, i) => {
        return (
          <Row key={i} className="card-movie-container">
            <Col>
              <img src={m.poster} alt="" className="card-move-image" />
            </Col>
            <Col>
              <p>
                Title:<br />
                <span className="card-movie-title">{m.title}</span>
              </p>
              <p>
                Data Release:<br />
                <span className="card-movie-release-date">{m.releaseDate}</span>
              </p>
              <div className="card-movie-genres-container">
                Genres:
                {m.genres.map((g, i) => {
                  return (
                    <Row key={`r_gen_${i}`}>
                      <Col key={`c_gen_${i}`}>{g}</Col>
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