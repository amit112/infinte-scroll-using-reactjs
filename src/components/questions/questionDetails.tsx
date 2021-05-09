import React from "react";
import { QuestionDetailsProps } from "../../models/props/questionDetailsProps";
import { Modal, Button } from "react-bootstrap";
import { Utils } from "../../utils";

const QuestionDetails = (props: QuestionDetailsProps) => {
  const {
    title,
    link,
    owner,
    tags,
    creation_date,
    showPopup,
    hidePopup,
  } = props;

  return (
    <Modal show={showPopup} onHide={() => hidePopup()} animation={false}>
      <Modal.Header>
        <Modal.Title>
         <h5 className="h4">
         <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
           </h5> {" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {title}
        <div className="d-flex text text-muted mt-2">
          Tags: {tags.join(", ")}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-inline-flex">
          <span>Asked by: {owner.display_name}</span> ,
          <span className="px-2">
            {Utils.convertTimestampToReadableTime(creation_date)}
          </span>
        </div>

        <Button onClick={() => hidePopup()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionDetails;
