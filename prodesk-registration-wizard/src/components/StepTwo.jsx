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

            <div
            className='input-label-pair'>
                
            <p>Email</p>
            <input  className={emailValid
                ? ""
                : "field-error"
            }

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

            { !emailValid && (

                <p className='error-text'>
                    Invalid email address.
                </p>
            )}

            </div>

            <div className='input-label-pair'>

                <p>Password</p>
            <input
            className={passwordValid
                ? ""
                : "field-error"
            }
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

            { !passwordValid && (

                <p className='error-text'>
                    Password length should be atleast 8 characters.
                </p>
            )}
            </div>

            <div className='input-label-pair'>

                <p>Confirm password</p>
            <input
            className={passwordMatch
                ? ""
                : "field-error"
            }
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

            { !passwordMatch && (

                <p className='error-text'>
                    Passwords do not match.
                </p>
            )}
            </div>
            
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