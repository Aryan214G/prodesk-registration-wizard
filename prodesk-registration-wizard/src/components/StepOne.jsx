import React from 'react'
import { useState } from 'react';
const StepOne = (props) => {

const { formData, setFormData, setStep } = props;
const [field1Class, setField1Class] = useState("field");

const emailValid = formData.email.includes("@");
const passwordValid = formData.password.length >= 8;
const passwordMatch = formData.password === formData.confirmPassword;

  return (
    <div>
        <h1>Personal Info</h1>

        <div className='card'>

            <input
            type='text'
            placeholder='Enter first name'
            value={formData.firstName}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    firstName: event.target.value 
                })
            }
            />

            <input
            type='text'
            placeholder='Enter last name'
            value={formData.lastName}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    lastName: event.target.value
                })
            }
            />

            <input
            type='text'
            placeholder='Enter date of birth'
            value={formData.dob}
            onChange={(event) => 
                setFormData({
                    ...formData,
                    dob: event.target.value
                })
            }
            />
            
        </div>

        <button
        onClick={(event) => setStep(2)}
        > Next 
        </button>

    </div>
  )
}

export default StepOne