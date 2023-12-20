import React from "react";
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../../shared/environment-variable';

const GenresFilter = () => {
  const filterMovies = (index) => {
    genres[index]["checked"] = !genres[index]["checked"];
    liked_filtered_movies = liked_movies.filter((movie) => {
      let filter = true;
      for(let i=0; i < movie.genres.length && filter; i++)
        for(let j=0; j < genres.length && filter; j++)
            if(movie.genres[i] == genres[j]["name"])
              filter = false;
      return filter;
    });
  };
  return (
    <>
      <Row key={"genres_row_0"}>
        <Form style={{padding:'30px 5px'}}>
            {genres?.map((g_itm, index) => {
            return (
                <Col key={`genres_col_${index}`} className="header-col">
                        <Form.Check
                            type="switch"
                            onChange={(value)=>filterMovies(value,genres)}
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
