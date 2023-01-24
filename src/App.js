import './App.css';
import React, {useEffect, useState} from "react";
import Links from "./components/Links/Links";
import {HashRouter, Routes, Route, Switch, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    useEffect(() => {
        document.body.style.backgroundColor = `${isDarkTheme ? "black" : "aliceblue"}`
    }, [])
    return (
        <div>
            <HashRouter>
                <div style={{backgroundColor: `${isDarkTheme ? "black" : "aliceblue"}`}}>
                    <Routes>
                        <Route path='' element={<Links isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>}/>
                        <Route path="downloads" element={<Links isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>}/>
                        <Route path="records" element={<Links isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>}/>
                    </Routes>
                </div>
            </HashRouter>
        </div>

    )
}

export default App;
