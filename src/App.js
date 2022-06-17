import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/userPages/Login";
import Register from "./components/userPages/Register";
import NavBar from "./components/navbar/navbar";
import Aboutpage from "./components/aboutpage/aboutpage";
import Questions from "./components/questions/Questions";
import Dashboard from "./components/userPages/Dashboard";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ username: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                
                    {/* <NavBar /> */}
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route exact path="" element={<Homepage />} />
                        <Route path="about" element={<Aboutpage />} />
                        <Route path="questions" element={<Questions />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Routes>
                    
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;