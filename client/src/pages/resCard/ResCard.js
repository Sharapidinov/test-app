import React from 'react';

const ResCard = ({questions ,result}) => {


    const myAnswer = (it) => {
     let res =  questions.find(my => it?._id === my._id)
        return res?.userAnswer

    }
    return (
        <section className="bg-brown p-5">
            <div className="container">
                <div>
                    {result?.results?.map(it => {
                        return (
                            <div key={it._id} className="bg-test p-3 m-2" >
                                <h5>{it.question}</h5>
                                <p> Correct answer: {it?.rightAnswer} </p>
                                <p> Your answer: {myAnswer(it)} </p>
                            </div>
                        )
                    })}


                    <h5 className="bg-test w-25 p-3 m-2">Overall points: {result.totalPoints}</h5>
                </div>

            </div>

        </section>
    );
};

export default ResCard;