import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
const Question = (props) => {

  const checkQuestionMark = (text) => {
    if (text.slice(-1) == '?') {
      return false
    } else return true
  }

  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: (values) => {
      props.setQuestionText(values.question)
      if (checkQuestionMark(values.question)) {
        props.addQuestionMark()
      }
      props.getAnswerData()
      props.toggleGetAnswer()
    },
  });
  if (props.getAnswer) { return <Navigate to = "/answer" /> }
  else return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="question">
          <label htmlFor="firstName">What's your question?</label>
          <input
            autocomplete="off"
            type="text"
            name="question"
            onChange={formik.handleChange}
            value={formik.values.question}
            placeholder="Question..."
          />
          {/* <button type="submit"></button> */}
        </div>
      </form>
    </div>
  );
};

export default Question;
