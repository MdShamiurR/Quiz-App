
import axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=15${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    console.log(data);
    setQuestions(data.results)
  }

  return (
    <Router>
      <div className="app" style={{ backgroundImage: "url(https://s3-eu-west-1.amazonaws.com/tt-screenshots/2e2752af-f0e8-4024-8101-ca9cfe29f0be-facebook.png?update=1655325328)" }}>
        <Header></Header>


        <Routes>
          {/* <Route path="/" exact>
            <Home></Home>
          </Route> */}
          <Route path="/" element={<Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions} />} />
          <Route path="quiz/*" element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}

          />} />
          <Route path="result/*" element={<Result name={name} score={score} />} />
        </Routes>

      </div>
      <Footer></Footer>
    </Router>

  );
}

export default App;
