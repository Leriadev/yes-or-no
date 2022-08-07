import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AnswerContainer from "./Components/Answer/AnswerContainer";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import QuestionContainer from "./Components/Question/QuestionContainer";
function App(props) {
  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__main">
        <div>
          <h1>Yes or No?</h1>
          <Router>
            <Routes>
            <Route path="/" element={<QuestionContainer/>} />
            <Route path="/answer" element={<AnswerContainer />} />
            </Routes>
          </Router>
        </div>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
