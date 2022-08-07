const TOGGLE_GET_ANSWER = "TOGGLE-GET-ANSWER"

let initialState= {
    getAnswer: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GET_ANSWER:
            return {...state, getAnswer: !state.getAnswer}
            default:
                
            return state
    }
}

export const toggleGetAnswer = () => ({
    type: TOGGLE_GET_ANSWER,
  });

export default appReducer;