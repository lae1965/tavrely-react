import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Consignments } from "../Consignments";

import { History } from "../History";
import { MainPage } from "../MainPage";
import { PageError } from "../PageError";
import { Rules } from "../Rules";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/history" element={<History />} />
                <Route path="/consignments" element={<Consignments />} />
                <Route path="*" element={<PageError />} />
            </Routes> 
        </BrowserRouter>
    );
}