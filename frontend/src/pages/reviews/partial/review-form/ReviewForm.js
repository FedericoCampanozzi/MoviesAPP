import {Form,Button} from 'react-bootstrap';
import './ReviewForm';

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  const lblBtn = defaultValue == "" ? "Submit" : "Update";
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} style={{ resize: 'none' }} />
        </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>{lblBtn}</Button>
    </Form>   

  )
}

export default ReviewForm
