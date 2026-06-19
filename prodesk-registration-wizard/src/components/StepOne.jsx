import React from 'react'

const StepOne = (props) => {

const { formData, setFormData, setStep } = props;

  return (
    <div>
        <h1>Personal Info</h1>

        <div className='form-card'>

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