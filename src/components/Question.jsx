import React from "react";
import Options from "./Option";

function Question(props) {

    const {question, selectedOption, onOptionChange, onSubmit} = props;

    return (
        <div>
            <h3>Question {question.id}</h3>
            <h5 className="mt-2">{question.question}</h5>
            <form onSubmit={onSubmit} className="mt-2 mb-2">
                { console.log("props")}
                { console.log(props)    }
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button 
                    type="submit" 
                    className="btn btn-primary mt-2">
                        SUBMIT
                </button>
            </form>
        </div>
    );
}

export default Question;