import React from "react";
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const GenresFilter = ({ genres }) => {
  return (
    <>
      <Row key={"genres_row_0"}>
        <Form style={{padding:'30px 5px'}}>
            {genres?.map((genres, index) => {
            return (
                <Col key={`genres_col_${index}`} className="header-col">
                        <Form.Check
                            type="switch"
                            id={`genres_col_ckbox_${index}`}
                            label={genres}
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
