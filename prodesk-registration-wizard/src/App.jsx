import React from 'react'
import { useState } from 'react';
import "./App.css";
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"

const App = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  )

  return (
    <div>

      {step === 1 && 
      (
        <StepOne 
          formData = {formData}
          setFormData = {setFormData}
          setStep = {setStep}
        />
      )}

      {step === 2 && (

        <StepTwo
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
        />
      )}

    </div>
  )
}

export default App