import { connect } from "react-redux";
import Answer from "./Answer";
import { toggleGetAnswer } from "../../appReducer";

let mapStateToProps = (state) => {
  return {
    getAnswer: state.app.getAnswer,
    questionText: state.answer.questionText,
    answer: state.answer.answer,
    forced: state.answer.forced,
    image: state.answer.image,
    isSetSuccsess: state.answer.isSetSuccsess
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleGetAnswer: () => {
      dispatch(toggleGetAnswer());
    },
  };
};

const AnswerContainer = connect(mapStateToProps, mapDispatchToProps)(Answer);
export default AnswerContainer;
