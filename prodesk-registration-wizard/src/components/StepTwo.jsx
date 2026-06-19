import React from 'react'
import StepOne from './StepOne';

const StepTwo = (props) => {

const { formData, setFormData, setStep } = props;

  return (
    <div>
        <button
        onClick={(event) => setStep(1)}>
            Back
        </button>
        <button>
            Next
        </button>
    </div>
  )
}

export default StepTwo