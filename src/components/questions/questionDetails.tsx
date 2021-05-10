import React from "react";
import { QuestionDetailsProps } from "../../models/props/questionDetailsProps";
import { Modal, Button } from "react-bootstrap";

const QuestionDetails = (props: QuestionDetailsProps) => {
  
  const { title, link, body, showPopup, hidePopup } = props;

  return (
    <Modal show={showPopup} onHide={() => hidePopup()} animation={false}>
      <Modal.Header>
        <Modal.Title>
          <h5 className="h4">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h5>{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => hidePopup()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionDetails;
