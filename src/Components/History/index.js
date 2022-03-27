import { useEffect } from 'react';

import './history.scss';
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Header2 } from "../Header2";
import { HistoryContent } from "../HistoryContent";

export const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Header2/>
            <HistoryContent />
            <Footer />
        </>
    );
}