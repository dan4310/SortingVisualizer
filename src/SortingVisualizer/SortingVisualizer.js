import React from 'react';
import AppBar from '../components/AppBar';
import Options from '../components/Options';
import SortingDisplay from '../components/SortingDisplay/SortingDisplay';

import {ParametersProvider} from '../context/ParametersContext';

const SortingVisualizer = () => {
    return (
        <div>
            <ParametersProvider>
                <AppBar/>
                <Options/>
                <SortingDisplay/>
            </ParametersProvider>
        </div>
    )
}

export default SortingVisualizer;