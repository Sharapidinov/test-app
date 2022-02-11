import React, {useEffect, useState} from 'react';
import axios from "axios";
import TestCard from "../../components/TestCard/TestCard.js";
import {useParams} from "react-router-dom";
import ResCard from "../resCard/ResCard.js";


const PassTestCard = () => {
    const [test, setTest] = useState([])
    const [result, setResult] = useState([])
    const [questions, setQuestions] = useState([])
    const [show, setShow] = useState(false)
    const {name} = useParams()

    useEffect(() => {
        axios(`/api/tests/get-test/${name}`).then(({data}) => {
            setTest(data)
            console.log(data[0])
        })
    },[])



    const chooseAnswer = (e, quest) =>{
        const filtered = questions.filter(it => it._id !== quest._id)
        const questAns = {
            _id: quest._id,
            userAnswer: e.target.value
        }
        setQuestions([...filtered, questAns])
    }



    const finishTest = () => {
        if(test[0].questions.length === questions.length) {
            axios.post(`/api/tests/check-test/${name}`, questions )
                .then(({data}) => {
                    setResult(data)
                    setShow(!show)
                })

        }
        else {
            alert("Check all questions")
        }

    }

    return (
        <>
            {
                !show ? <section className="bg-brown">
                    <div className="container">
                        <div className="row">
                            {
                                test.map(it => {
                                    return (
                                        it.questions?.map(quest => {
                                        return (
                                            <TestCard key={quest._id} test={quest} chooseAnswer={chooseAnswer}/>

                                        )
                                    } )
                                    )
                                })
                            }
                        </div>
                        <button className="btn-secondary btn" onClick={finishTest}>Finish</button>
                    </div>
                </section> : <ResCard  questions={questions} result={result}/>
            }
        </>


    )

};

export default PassTestCard;