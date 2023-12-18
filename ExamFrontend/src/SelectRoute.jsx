import React, { useState } from 'react';
import './dropdown.css'

function DropdownForm() {
    const [dropdownOne, setDropdownOne] = useState('');
    const [dropdownTwo, setDropdownTwo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Selected options: ${dropdownOne}, ${dropdownTwo}`);
        // Add logic to send data here
    };

    return (
        <form onSubmit={handleSubmit}  className="form-container">
            <div className="form-group">
            <select value={dropdownOne} onChange={(e) => setDropdownOne(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
                <option value="option6">Option 6</option>
                <option value="option7">Option 7</option>
                <option value="option8">Option 8</option>
                {/* Add more options as needed */}
            </select>

            <select value={dropdownTwo} onChange={(e) => setDropdownTwo(e.target.value)}>
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
                <option value="optionC">Option C</option>
                <option value="optionD">Option D</option>
                <option value="optionE">Option E</option>
                <option value="optionF">Option F</option>
                <option value="optionG">Option G</option>
                <option value="optionH">Option H</option>
                {/* Add more options as needed */}
            </select>

            <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default DropdownForm;