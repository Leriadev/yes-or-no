import { connect } from "react-redux";
import { toggleGetAnswer } from "../../appReducer";
import { setQuestionText, addQuestionMark, getAnswerData } from "../../answerReducer";
import Question from "./Question";

let mapStateToProps = (state) => {
  return {
    getAnswer: state.app.getAnswer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleGetAnswer: () => {
      dispatch(toggleGetAnswer());
    },
    setQuestionText: (text) => {
      dispatch(setQuestionText(text));
    },
    addQuestionMark: () => {
        dispatch(addQuestionMark())
    },
    getAnswerData: () => {
      dispatch(getAnswerData())
    }
  };
};

const QuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
export default QuestionContainer;
