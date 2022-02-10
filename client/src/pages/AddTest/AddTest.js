import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Variant from "../../components/Variant.js";
import axios from "axios";


const AddTest = () => {
 const {register, handleSubmit, reset} = useForm()
    const [testName, setTestName] = useState("")
    const [test, setTest] = useState([])

    const addQuset = (data) => {

     const answers = Object.keys(data).filter( it => it.startsWith("answer")).map(it => data[it])

     const question = {
         question: data.question,
         points: data.points,
         answers,
         rightAnswer: answers[data.rightAnswer]
     }
        setTest([...test, question])
        reset()
    }
    const createTest = () => {
        axios.post(`api/tests/add-test/${testName}`, test)
            .then(({data}) => alert("Added"))
    }

    return (
        <section className="bg-brown ">
            <div className="container ">
                <form className="w-100 d-flex align-items-center justify-content-center" onSubmit={handleSubmit(addQuset)}>
                    <div className="w-50 box p-3">
                        <input {...register("question")} className="w-100 mb-3" placeholder="Your question" type="text"/>
                        <div>
                            <Variant value={0} register={register} regName={"answer 1"}/>
                            <Variant value={1} register={register} regName={"answer 2"}/>
                            <Variant value={2} register={register} regName={"answer 3"}/>
                            <Variant value={3} register={register} regName={"answer 4"}/>
                        </div>
                        <div className="text-end mb-2 "><input {...register("points")} type="number" placeholder="points"/></div>

                        <div className="text-end">
                            <button>Add a question</button>

                        </div>
                    </div>
                </form>
                <hr/>
                <div className="d-flex align-items-center justify-content-center">
                    <input onChange={(e) => setTestName(e.target.value)} type="text" placeholder="Enter test name"/>
                    <button onClick={createTest} type="button">Create a test</button>
                </div>
            </div>
        </section>
    );
};

export default AddTest;