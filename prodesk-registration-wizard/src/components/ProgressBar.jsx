import React from 'react'

function ProgressBar({ step }) {

    return (

        <div className="progress-container">

            <div className="progress-line"></div>

            <div className="steps">

                <div className="step">

                    <div
                        className={
                            step >= 1
                                ? "circle active"
                                : "circle"
                        }
                    >
                        1
                    </div>

                    <p>Step 1</p>

                </div>

                <div className="step">

                    <div
                        className={
                            step >= 2
                                ? "circle active"
                                : "circle"
                        }
                    >
                        2
                    </div>

                    <p>Step 2</p>

                </div>

                <div className="step">

                    <div
                        className={
                            step >= 3
                                ? "circle active"
                                : "circle"
                        }
                    >
                        3
                    </div>

                    <p>Step 3</p>

                </div>

            </div>

        </div>

    );
}

export default ProgressBar