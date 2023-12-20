import React from "react";
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../api/eviroment-variable';

const GenresFilter = ({ genres, likedMovies, setLikedMovies, setGenres }) => {
  const filterMovies = (value, genres_el) => {
    let l = [...likedMovies];
    const g = [...genres];
    genres_el["checked"] = !genres_el["checked"];
    l = l.filter((movie) => {
      let filter = false;
      for(let i=0;i<movie.genres.length && !filter;i++)
        for(let j=0;j<g.length && !filter;j++)
            if(movie.genres[i] == g[j]["name"])
              filter = true;
      return filter;
    });
    setLikedMovies(l);
    setGenres(g);
  };
  return (
    <>
      <Row key={"genres_row_0"}>
        <Form style={{padding:'30px 5px'}}>
            {genres?.map((genres, index) => {
            return (
                <Col key={`genres_col_${index}`} className="header-col">
                        <Form.Check
                            type="switch"
                            onChange={(value)=>filterMovies(value,genres)}
                            value={genres["name"]}
                            id={`genres_col_ckbox_${index}`}
                            label={genres["name"]}
                            checked={genres["checked"]}
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
