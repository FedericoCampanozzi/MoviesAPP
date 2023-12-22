import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useSharedState } from "../../../../shared/state-context";



const GenresFilter = () => {
  const { genres, liked_movies, setLikedFilteredMovies } = useSharedState();
  const filterMovies = (index) => {
    genres[index]["checked"] = !genres[index]["checked"];
    let flm = liked_movies.filter((movie) => {
      let cg = 0;
      for (let i = 0; i < movie.genres.length; i++)
        for (let j = 0; j < genres.length; j++)
          if (genres[j]["checked"] && movie.genres[i] == genres[j]["name"]) 
            cg ++;
      return cg>0;
    });
    setLikedFilteredMovies(flm);
  };
  return (
    <>
      <Row key={"genres_row_0"}>
        <Form style={{ padding: "30px 5px" }}>
          {genres?.map((g_itm, index) => {
            return (
              <Col key={`genres_col_${index}`} className="header-col">
                <Form.Check
                  type="switch"
                  onChange={(value) => filterMovies(index)}
                  value={g_itm["name"]}
                  id={`genres_col_ckbox_${index}`}
                  label={g_itm["name"]}
                  checked={g_itm["checked"]}
                />
              </Col>
            );
          })}
        </Form>
      </Row>
    </>
  );
};

export default GenresFilter;
