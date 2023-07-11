import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import qBank from './components/QuestionBank';

import './App.css';

function App() {

	const [state, setState] = useState(
		{
            questionBank: qBank ,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        }
	);

	const { questionBank, currentQuestion, selectedOption, score, quizEnd } = state;

	const handleOptionChange = (e) => {
		setState({selectedOption: e.target.value});
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
		checkAnswer();
		handleNextQuestion();
	}

	const checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

	const handleNextQuestion = () => {
        const { questionBank, currentQuestion } = state;
        if (currentQuestion + 1 < questionBank.length) {
            setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            setState({
                quizEnd: true,
            });
        }
    };
 

	return (
		<div className='App d-flex flex-column align-items-center justify-content-center'>
			<h1 className="app-title">QUIZ APP</h1>

			{ ! quizEnd ? (
				<Question 
					question = {questionBank[currentQuestion]}
					selectedOption = {selectedOption}
					onOptionChange = {handleOptionChange}
					onSubmit = {handleFormSubmit}
				/>
			) : (
				<Score 
					score = {score}
					onNextQuestion = {handleNextQuestion()}
					className = "score"
				/>
			)}
		</div>
	);
}

export default App;
