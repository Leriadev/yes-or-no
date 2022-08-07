import { yesOrNoAPI } from "./API";

const SET_QUESTION_TEXT = '/answer/SET-QUESTION-TEXT'
const ADD_QUESTION_MARK = '/answer/ADD-QUESTION-MARK'
const SET_ANSWER_DATA = '/answer/SET-ANSWER-DATA'
const SET_IS_SET_SUCCESS = '/answer/SET-IS-SET-SUCCSESS'

let initialState = {
  questionText: "asd",
  answer: null,
  forced: null,
  image: "",
  isSetSuccsess: true,
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_TEXT:
        return {...state, questionText: action.text}
    case ADD_QUESTION_MARK: 
        return {...state, questionText: state.questionText + '?'}
      case SET_ANSWER_DATA: 
      return {...state, answer:action.answer, forced:action.forced, image:action.image}
      case SET_IS_SET_SUCCESS: 
      return {...state, isSetSuccsess: !state.isSetSuccsess}
    default:
      return state;
  }
};

export const setQuestionText = (text) => ({
    type: SET_QUESTION_TEXT,
    text
})
export const setIsSetSuccsess = () => ({
    type: SET_IS_SET_SUCCESS
})
export const addQuestionMark = () => ({
    type: ADD_QUESTION_MARK
})
export const setAnswerData = (response) => ({
    type: SET_ANSWER_DATA,
    answer: response.answer,
    forced: response.forced,
    image: response.image
})

export const getAnswerData = () => async (dispatch) => {
  dispatch(setIsSetSuccsess())
  let response = await yesOrNoAPI.getAnswer()
  if (response.status === 200) {
    dispatch(setAnswerData(response.data));
  }
  dispatch(setIsSetSuccsess())
}

export default answerReducer;
