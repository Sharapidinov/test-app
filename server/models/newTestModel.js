import mongoose from "mongoose";

const {Schema, model} = mongoose

const QuestSchema = new Schema({
    question: {
        type: String,
        required: true
    },

    answers: [String],
    rightAnswer: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        default: 2
    },
})

const TestSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        questions:[QuestSchema]

}, )

export default model("tests" , TestSchema)