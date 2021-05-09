import React from "react";
import { Utils } from "../../utils";
import { QuestionsProps } from "../../models/props/questionsProps";

const SingleQuestion = (props: QuestionsProps) => {
  const { question, showQuestionDetails } = props;

  return (
    <div className="card text-center mt-2">
      <div className="card-body">
        <h5 className="card-title">{question.title}</h5>
        <button
          onClick={() => showQuestionDetails(question)}
          className="btn btn-primary"
        >
          View Details
        </button>
      </div>
      <div className="card-footer text-muted">
        <span>Asked by: {question.owner.display_name}</span>,{" "}
        <span>
          {Utils.convertTimestampToReadableTime(question.creation_date)}
        </span>
      </div>
    </div>
  );
};

export default SingleQuestion;
