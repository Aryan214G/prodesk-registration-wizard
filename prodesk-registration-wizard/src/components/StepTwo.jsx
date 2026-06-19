import React, { useState } from 'react'
import StepOne from './StepOne';
import {
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

const StepTwo = (props) => {

    const { formData, setFormData, setStep } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    <input className={emailValid
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

                    {!emailValid && (

                        <p className='error-text'>
                            Invalid email address.
                        </p>
                    )}

                </div>

                <div className='input-label-pair'>

                    <p>Password</p>

                    <div className='password-field'>
                        <input
                            className={passwordValid
                                ? ""
                                : "field-error"
                            }
                            type={showPassword
                                ? 'text'
                                : 'password'
                            }

                            placeholder='Enter password'
                            value={formData.password}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    password: event.target.value
                                })
                            }
                        />

                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >
                            { showPassword
                            ? <FaEyeSlash/>
                            : <FaEye/>
                            }
                        </button>
                    </div>

                    {!passwordValid && (

                        <p className='error-text'>
                            Password length should be atleast 8 characters.
                        </p>
                    )}
                </div>

                <div className='input-label-pair'>

                    <p>Confirm password</p>

                    <div className='password-field'>
                        <input
                            className={passwordMatch
                                ? ""
                                : "field-error"
                            }
                            type={showConfirmPassword
                                ? 'text'
                                : 'password'
                            }

                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    confirmPassword: event.target.value
                                })
                            }
                        />

                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                        >
                            { showConfirmPassword
                            ? <FaEyeSlash/>
                            : <FaEye/>
                            }
                        </button>
                    </div>

                    {!passwordMatch && (

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
                disabled={
                    !formData.email
                    || !formData.password
                    || !formData.confirmPassword
                    || !passwordValid
                    || !emailValid
                    || !passwordMatch
                }
                onClick={(event) => setStep(3)}>
                Next
            </button>
        </div>
    )
}

export default StepTwo