import { Form, Button } from "react-bootstrap";
import "./review-form.css";
import React from "react";

const ReviewForm = ({ submitFunction, label, value = "", i = null }) => {
  const lblBtn = value == "" ? "Submit" : "Update";
  return (
    <Form>
      <Form.Group className="mb-3" controlId={`review_${i}`}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ resize: "none" }}
          value={value}
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
