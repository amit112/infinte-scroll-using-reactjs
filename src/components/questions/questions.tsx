import React from "react";
import { QuestionsProps } from "../../models/props/questionsProps";
import { QuestionsState } from "../../models/states/questionsState";
import { GetQuestionsResponse, Question } from "../../models/questions";
import api from "../../services/api";
import { QuestionDetailsProps } from "../../models/props/questionDetailsProps";
import QuestionDetails from "./questionDetails";
import SingleQuestion from "./singleQuestion";

class Questions extends React.Component<QuestionsProps, QuestionsState> {
 
  loadingRef: React.RefObject<HTMLDivElement> = React.createRef();
  observer: IntersectionObserver;
  state = {
    questions: [],
    hasMoreData: false,
    loading: false,
    page: 1,
    pageSize: 50,
    prevY: 0,
    showDetails: false,
    questionDetails: {
      tags: [],
      owner: {
        reputation: 0,
        user_id: 0,
        user_type: "",
        accept_rate: 0,
        profile_image: "",
        display_name: "",
        link: "",
      },
      is_answered: false,
      view_count: 0,
      answer_count: 0,
      score: 0,
      last_activity_date: 0,
      creation_date: 0,
      last_edit_date: 0,
      question_id: 0,
      content_license: "",
      link: "",
      title: "",
      hidePopup: () => {},
      showPopup: false,
    },
  };

  componentDidMount = (): void => {
    this.getQuestions(this.state.page);
    this.setScrollObserver();
  };

  setScrollObserver = (): void => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(this.loadingRef.current);
  };

  handleObserver = (entities, observer): void => {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const curPage = this.state.page + 1;
      this.getQuestions(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  };

  getQuestions = async (page): Promise<null | void> => {
    
    this.setState({ loading: true });

    try {
      const response: GetQuestionsResponse = (
        await api.get(
          `questions?key=${process.env.REACT_APP_API_KEY}&site=stackoverflow&page=${page}&pagesize=${this.state.pageSize}&order=desc&sort=activity&filter=default`
        )
      ).data;

      this.setState({
        questions: [...this.state.questions, ...response.items],
        hasMoreData: response.has_more,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  hidePopup = (): void => {
    this.setState({ showDetails: false });
  };

  showQuestionDetails = (question: Question): void => {
    const questionDetails: QuestionDetailsProps = {
      ...question,
      ...{ hidePopup: this.hidePopup, showPopup: true },
    };
    this.setState({ showDetails: true, questionDetails });
  };

  render() {
    const {
      showDetails,
      questionDetails,
      questions,
      loading,
      hasMoreData,
    } = this.state;

    const loadingCSS = {
      height: "100px",
      margin: "30px",
    };

    const loadingTextCSS = {
      display: loading && hasMoreData ? "block" : "none",
    };

    return (
      <div className="container">
        <div className="row text-center mt-2">
          <h4 className="h4 ">Questions</h4>
        </div>
        <div>{showDetails && <QuestionDetails {...questionDetails} />}</div>
        <div style={{ minHeight: "800px" }}>
          {questions.map((question: Question) => {
            return (
              <SingleQuestion
              key={question.question_id}
                question={question}
                showQuestionDetails={this.showQuestionDetails}
              />
            );
          })}
        </div>

        <div ref={this.loadingRef} style={loadingCSS}>
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default Questions;
