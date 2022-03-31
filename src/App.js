import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import FeedPage from "./pages/feed";
import NotFoundPage from "./pages/notFoundPage";

export default function App() {
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