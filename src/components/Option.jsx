import React from "react";

function Options(props) {
    
    const {options, selectedOption, onOptionChange} = props;

    return(
        <div className="options">
            {options.map((option,index) => {
                <div key={index} className="form-check">
                    <input 
                        type="radio" 
                        className="form-check-input"
                        name = "option"
                        value={option}
                        checked = {selectedOption === option}
                        onChange = {onOptionChange}
                    />
                </div>
            })}
        </div>
    );
}

export default Options;