import React from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ submitFunction, label, value = "", controlId }) => {
  const lblBtn = value == "" ? "Submit" : "Update";
  return (
    <Form>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ resize: "none" }}
          defaultValue={value}
        />
      </Form.Group>
      <Button 
        variant="outline-info" 
        onClick={submitFunction}>
          {lblBtn}
      </Button>
    </Form>
  );
};

export default ReviewForm;
