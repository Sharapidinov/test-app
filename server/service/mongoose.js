import mongoose from "mongoose"


export const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB is connected"))
        .catch(e => console.log("db connection error", e) )
}

export default dbConnect