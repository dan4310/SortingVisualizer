import { AirlineSeatReclineExtraTwoTone, ViewArrayOutlined } from '@material-ui/icons';
import React , { useState, useEffect } from 'react';

export const ParametersContext = React.createContext();

export const ParametersProvider = (props) => {
    const [bins, setBins] = useState(30);
    const [algo, setAlgo] = useState('null');
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    useEffect(() => {
        getNewArray();
    }, [bins])

    const getNewArray = () => {
        var arr = [];
        for (var i = 0; i < bins; i++) {
            arr.push(Math.floor(Math.random() * (10000 - 1) + 1));
        }
        setArray(arr);
    }

    const bubbleSort = () => {
        var arr = [...array];
        if (isSorted(arr)) {
            return;
        }
        var count = 0;
        setIsSorting(true);
        var id = window.setInterval(bs, 200);    
        function bs () {
            
            for (var j = 0; j < arr.length; j++) {
                count++;
                if (arr[j] > arr[j+1]) {
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                setArray(arr);
                if (isSorted(array) || count >= bins*bins) {
                    window.clearInterval(id);
                    setIsSorting(false);
                }
            } 
        }
              
    }

    function isSorted(arr) {
        var sorted = true;
        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                sorted = false;
                break;
            }
        }
        return sorted;
    }

    return(
        <ParametersContext.Provider value={{
            bins,
            setBins,
            algo,
            setAlgo,
            array,
            setArray,
            newArray: getNewArray,
            bubbleSort: bubbleSort,
            isSorting,
            setIsSorting
        }}>
            {props.children}
        </ParametersContext.Provider>
    )

}