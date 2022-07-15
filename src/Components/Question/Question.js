import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Question.css'

const Question = ({ currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions, }) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select"
        }
        else if (selected === i && selected !== correct) {
            return "wrong"
        } else if (i === correct) {
            return "select";
        }
    }
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const handleNext = () => {
        if (currQues > 8) {
            navigate('/result');
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else setError("Select an option first");
    };

    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
    };

    return <div className="question">
        <h2 className="h2">Question {currQues + 1}</h2>
        <div className="singleQuestion">
            <h3 className="h3">{questions[currQues].question}</h3>
            <div className="options">
                {error && <ErrorMessage>You must fill all the current fields here </ErrorMessage>}
                {
                    options &&
                    options.map(i => (
                        <button
                            onClick={() => handleCheck(i)

                            }
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i}
                            disabled={selected}
                        >
                            {i}
                        </button>
                    ))
                }
            </div>

            <div className="controls">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ width: 185 }}
                    href="/"
                    onClick={() => handleQuit()}>Exit</Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: 185 }}
                    onClick={handleNext}
                >Next Question</Button>

            </div>
        </div>
    </div>
}
export default Question;