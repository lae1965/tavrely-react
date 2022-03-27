import { useEffect } from 'react';

import { Header } from '../Header';
import { Slider } from '../Slider';
import { Header2 } from '../Header2';
import { News } from '../News';
import { Footer } from '../Footer';

export const MainPage = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    return(
        <> 
            <Header />
            <Slider />
            <Header2 />
            <News />
            <Footer />
        </>
    );
}