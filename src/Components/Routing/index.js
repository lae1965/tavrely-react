import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../AppLayout";

import { History } from "../History";
import { MainPage } from "../MainPage";
import { PageError } from "../PageError";
import { Rules } from "../Rules";
import { Consignments } from "../Consignments";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="rules" element={<Rules />} />
                    <Route path="history" element={<History />} />
                    <Route path="consignments" element={<Consignments />} />
                </Route>
                <Route path="*" element={<PageError />} />
            </Routes> 
        </BrowserRouter>
    );
}