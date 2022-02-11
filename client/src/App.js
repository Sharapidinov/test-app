import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header.js";
import PassTestCard from "./pages/ParssTetsCard/PassTestCard.js";
import Main from "./pages/Main.js";
import AddTest from "./pages/AddTest/AddTest.js";
import ResCard from "./pages/resCard/ResCard.js";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
            <Route path={"/test/:name"} element={<PassTestCard/>}/>
            <Route path={"/"} element={<Main/>}/>
            <Route path={"/add-test"} element={<AddTest/>}/>
            <Route path={"/result"} element={<ResCard/>}/>
            </Routes>
        </>
    );
};

export default App;