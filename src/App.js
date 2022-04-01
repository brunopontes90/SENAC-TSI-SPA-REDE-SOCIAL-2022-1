import React from "react";
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import FeedPage from "./pages/feed";
import NotFoundPage from "./pages/notFoundPage";
import LoginPage from "./pages/login";

import { UserContext } from "./auth";

export default function App() {
    const { currentUser } = React.useContext(UserContext);

    if(!currentUser){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="*" element={ <Navigate to="/login" /> } />
                </Routes>
            </BrowserRouter>
        )
    }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <FeedPage /> } />
                    <Route path="/explorer" element={ <HomePage /> } />
                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </BrowserRouter>
        );
}