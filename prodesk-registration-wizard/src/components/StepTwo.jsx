import React from 'react'
import StepOne from './StepOne';

const StepTwo = (props) => {

const { formData, setFormData, setStep } = props;

const emailValid = formData.email.includes("@");
const passwordValid = formData.password.length >= 8;
const passwordMatch = formData.password === formData.confirmPassword;


  return (
    <div>
        <h1>Account Details</h1>

        <div className='card'>

            <input
            type='text'
            placeholder='Enter email'
            value={formData.email}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    email: event.target.value 
                })
            }
            />

            <input
            type='text'
            placeholder='Enter password'
            value={formData.password}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    password: event.target.value
                })
            }
            />

            <input
            type='text'
            placeholder='Confirm password'
            value={formData.confirmPassword}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    confirmPassword: event.target.value
                })
            }
            />
            
        </div>

        <button
        onClick={(event) => setStep(1)}>
            Back
        </button>

        <button
        onClick={(event) => setStep(3)}>
            Next
        </button>
    </div>
  )
}

export default StepTwo