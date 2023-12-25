import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSharedState } from "../../../../shared/state-context";

const ReviewForm = ({ submitFunction, label, initValue = "", controlId }) => {
  const isEditMode = initValue != "";
  const lblBtn = isEditMode ? "Edit" : "Post";
  const { reviewBody, setReviewBody, editReviewBody, setEditReviewBody } = useSharedState();  
  useEffect(() => {
    if (isEditMode) setEditReviewBody(initValue);
    else setReviewBody(initValue);
  }, [initValue, setReviewBody]);
  const handleTextareaChange = (event) => {
    if (isEditMode) setEditReviewBody(event.target.value);
    else setReviewBody(event.target.value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ resize: "none" }}
          value={isEditMode ? editReviewBody : reviewBody}
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