import { useEffect } from "react"
import { Outlet } from "react-router";

import { Header } from "../Header";
import { Footer } from "../Footer";

export const AppLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}