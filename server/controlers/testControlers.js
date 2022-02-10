import {nanoid} from "nanoid";
import {readFile, writeFile, stat,readdir} from "fs/promises"
import mongoose from "../service/mongoose.js";
import Test from "../models/newTestModel.js";

export const testGet = (req, res) => {
    const {name} = req.params

    Test.find({name}, (err, data) => {
        if (err) return res.status(400).json({message:"error", err})
        console.log(data)
        res.json(data)
    } )

}

export const testPost = (req, res) => {
    const {name} = req.params
    const newTest = new Test({
        name,
        questions: req.body
    })

    newTest.save((err,data) => {
        if (err) return res.status(400).json({message:"error", err})

        res.json(data)
    })

}

export const checkTest = (req, res) => {
    const {name} = req.params
    const answers = req.body
    let totalPoints = 0


    Test.findOne({name}, (err, test) => {
        if (err) return res.status(400).json({message:"error", err})
        if (!test) return res.status(400).json({message:"undefind", err})

        const results = test.questions.map(it => {
                        const quest = {...it.toObject() }
                        const currentQuest = answers.find(it => it._id === String(quest._id))
                        quest.result = quest.rightAnswer === currentQuest.userAnswer
                        if(quest.result) {
                            totalPoints += quest.points
                        }
                        return quest

                     })

                    const  response = {
                        totalPoints,
                        results
                    }
                    res.json(response)
    })
}

export const getAllTests = (req, res) => {
    Test.find({}, (err, data) => {
        console.log(data)
        if (err) return res.status(400).json({message:"error", err})
        res.json(data)
    } )


    // readdir(`./data`)
    //     .then(files => {
    //         const result = files
    //             .filter(it => it !== `points-table.json`)
    //             .map(it => it.replace(/\.json$/, ""))
    //
    //         res.json(result)
    //     }).catch(err => res.json({message: "Error", err}))
}

