import express from "express";
import {checkTest, testGet, testPost, getAllTests} from "../controlers/testControlers.js";

const router = express.Router()

router.get("/get-test/:name", testGet)
router.get("/get-all-test", getAllTests)
router.post("/add-test/:name", testPost)
router.post("/check-test/:name", checkTest)

export default router