import { useEffect } from 'react';

import './Rules.scss';
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Header2 } from "../Header2";
import { RulesContext } from '../RulesContent';

export const Rules = () => {
    useEffect (() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Header />
            <Header2 />
            <RulesContext />
            <Footer />
        </>
    );
}