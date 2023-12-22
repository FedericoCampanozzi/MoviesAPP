import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSharedState } from "../../../../shared/state-context";

const ReviewForm = ({ submitFunction, label, initValue = "", controlId }) => {
  const lblBtn = initValue === "" ? "Submit" : "Update";
  const { reviewBody, setReviewBody } = useSharedState();  
  useEffect(() => {
    setReviewBody(initValue);
  }, [initValue, setReviewBody]);
  const handleTextareaChange = (event) => {
    setReviewBody(event.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ resize: "none" }}
          value={reviewBody}
          onChange={handleTextareaChange}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={submitFunction}>
        { lblBtn }
      </Button>
    </Form>
  );
};

export default ReviewForm;