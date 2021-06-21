import React from 'react';
import AppBar from '../components/AppBar';
import Options from '../components/Options';
import SortingDisplay from '../components/SortingDisplay/SortingDisplay';
import Performance from '../components/Performance';

import {ParametersProvider} from '../context/ParametersContext';

const SortingVisualizer = () => {
    return (
        <div>
            <ParametersProvider>
                <AppBar/>
                <Options/>
                <Performance/>
                <SortingDisplay/>
            </ParametersProvider>
        </div>
    )
}

export default SortingVisualizer;