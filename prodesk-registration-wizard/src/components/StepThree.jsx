import React from 'react'
import { useState } from 'react';
import StepTwo from './StepTwo'


const StepThree = ({ formData, setStep }) => {

    const [buttonText, setButtonText] = useState("Submit");

    function handleSubmit() {
        console.log(formData);

        setButtonText("Submitted successfully!");

        setTimeout(() => {
            setButtonText("Submit");
        }, 3000);
    }

    return (
        <div>
            <h1>Review and submit</h1>

            <div className='card'>

                <div className='section'>
                    <h3>Personal Info</h3>
                    <p>First name: {formData.firstName}</p>
                    <p>Last name: {formData.lastName}</p>
                    <p>Date of birth: {formData.dob}</p>
                </div>

                <div className='section'>
                    <h3>Account Details</h3>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                </div>

                <div className='button-group'>
                    <button
                        onClick={(event) => setStep(2)}>
                        Back
                    </button>

                    <button
                        onClick={handleSubmit}>
                        {buttonText}
                    </button>

                </div>
            </div>


        </div>
    )
}

export default StepThree