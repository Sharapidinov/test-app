import React from 'react';

const TestCard = ({test, chooseAnswer}) => {


    return (
        <div className="col-6">
                <div className="m-2 bg-test p-2">
                    <p>{test?.question}</p>
                    {test?.answers?.map(ans => {
                        return (
                            <div className="m-2">
                                <label>
                                    <input onChange={e => chooseAnswer(e, test)} className="radio-inp" type="radio"
                                           name={test?.question} value={ans} />
                                    {ans}
                                </label>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default TestCard;