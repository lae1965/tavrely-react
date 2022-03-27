import { useEffect } from 'react';
import WebFont from 'webfontloader';

import './style.scss';
import { Routing } from './Components/Routing';

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Playfair Display:400,700', 'Roboto:400,500,700,900']
            }
        });
    }, []);

    return (
        <Routing />
    );
}   

export default App;
