import {nanoid} from "nanoid";
import {readFile, writeFile, stat,readdir} from "fs/promises"


export const testGet = (req, res) => {
    const {name} = req.params


    readFile(`./data/${name}.json`, 'utf8').then(data => {
        const test = JSON.parse(data)
        test.map(it => delete it.rightAnswer)
        res.json(test)
    })
}

export const testPost = (req, res) => {
    const {name} = req.params

    stat(`./data/${name}.json`)
        .then(() => res.json({massage: "pleas choose another name"}))
        .catch(() => {
            let test = req.body.map(it =>({...it, id: nanoid(6)}))

            writeFile(`./data/${name}.json`, JSON.stringify(test), "utf-8").catch((e) => res.json(e))
                .then(() => res.json({massage: "successful"}))
                .catch((err) => res.json({massage: "error" , err}))
        })
}

export const checkTest = (req, res) => {
    const {name} = req.params
    const {username} = req.query
    const answers = req.body
    let totalPoints = 0

    readFile(`./data/${name}.json`, "utf-8")
        .then(data => {
            const result = JSON.parse(data).map(quest => {
                const currentQuest = answers.find(it => it.id === quest.id)
                quest.res = quest.rightAnswer === currentQuest?.userAnswer
                if(quest.res) {
                    totalPoints += quest.points
                }
                return quest

             })

            const  response = {
                totalPoints,
                result
            }
            res.json(response)

            readFile(`./server/data/points-table.json`, "utf-8")
                .then(data => {
                    const pointsTable = JSON.parse(data)
                    pointsTable.push({
                        id: nanoid(6),
                        username,
                        test: name,
                        totalPoints
                    })
                    writeFile("./server/data/points-table.json", JSON.stringify(pointsTable) , "utf-8")
                })
        })
}

export const getAllTests = (req, res) => {
    readdir(`./data`)
        .then(files => {
            const result = files
                .filter(it => it !== `points-table.json`)
                .map(it => it.replace(/\.json$/, ""))

            res.json(result)
        }).catch(err => res.json({message: "Error", err}))
}

