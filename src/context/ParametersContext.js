import { AirlineSeatReclineExtraTwoTone, RestaurantMenuRounded, SquareFootSharp, SubdirectoryArrowLeftSharp, ViewArrayOutlined } from '@material-ui/icons';
import React , { useState, useEffect } from 'react';
import * as Algos from './../Algos/mergeSort';

export const ParametersContext = React.createContext();

export const ParametersProvider = (props) => {
    const [bins, setBins] = useState(30);
    const [algo, setAlgo] = useState('null');
    const [array, setArray] = useState([]);
    const [speed, setSpeed] = useState(100);
    const [isSorting, setIsSorting] = useState(false);

    const T = 1000 * (1/(bins*bins)) * speed;
    

    useEffect(() => {
        getNewArray();
    }, [bins])


    function swap(a, i, j) {
        var temp = a[j];
        a[j] = a[i];
        a[i] = temp;
    }

    function isSorted(arr) {
        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i].value > arr[i+1].value) {
                return false;
            }
        }
        return true;
    }

    
    const getNewArray = () => {
        var arr = [];
        for (var i = 0; i < bins; i++) {
            var item = {}
            item.value = Math.floor(Math.random() * (100 - 1) + 1);
            item.color = 'secondary.light';
            arr.push(item);
        }
        setArray(arr);
    }

    //----------------------- BUBBLE SORT -----------------------------
    const bubbleSort = () => {
        var arr = [...array];
        if (isSorted(arr)) {
            return;
        }

        setIsSorting(true);
        var animations = [];

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length-1-i; j++) {
                const animation = {};
                animation.comparison = [j, j+1];
                if (arr[j].value > arr[j+1].value) {
                    animation.swap = [j, j+1];
                    swap(arr, j, j+1);
                } else {
                    animation.swap = [j,j];
                }
                animations.push(animation);
            }
        }

        const newAnimations = [];
        for (const animation of animations) {
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for (var i = 0; i < newAnimations.length; i++) {
            const [ind1, ind2] = newAnimations[i];
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const color = i % 3 === 0 ? 'red' : 'blue';
                var id = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    arrayBars[ind1].style.backgroundColor = color;
                    arrayBars[ind2].style.backgroundColor = color;
                }, T*i) 
                
            } else {
                var id = setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    var tempHeight = arrayBars[ind1].style.height;
                    arrayBars[ind1].style.height = arrayBars[ind2].style.height;
                    arrayBars[ind2].style.height = tempHeight;
                }, T*i)
            }
        }  
        setTimeout(() => {
            setArray(arr);
            setIsSorting(false);
        }, T*newAnimations.length) 
    };


    // ---------------- QUICK SORT --------------------------
    const quickSort = () => {
        var arr = [...array];

        if (isSorted(arr)) {
            return;
        }

        setIsSorting(true);
        var animations = [];

        qs(arr, 0, arr.length - 1);

        const newAnimations = [];
        for (const animation of animations) {
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        var currPiv = newAnimations[0][2];
        for (var i = 0; i < newAnimations.length; i++) {
            const [ind1, ind2, pivInd] = newAnimations[i];
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const color = i % 3 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (pivInd !== currPiv) {
                        arrayBars[currPiv].style.backgroundColor = 'blue';
                        currPiv = pivInd;
                    }
                    arrayBars[pivInd].style.backgroundColor = 'orange';
                    arrayBars[ind1].style.backgroundColor = color;
                    arrayBars[ind2].style.backgroundColor = color;
                    
                }, T*i) ;
                
            } else {
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    var tempHeight = arrayBars[ind1].style.height;
                    arrayBars[ind1].style.height = arrayBars[ind2].style.height;
                    arrayBars[ind2].style.height = tempHeight; 
                }, T*i);
            }

            setTimeout(() => {
                const arrayBars = document.getElementsByClassName('array-bar');
                arrayBars[currPiv].style.backgroundColor = 'blue';
                setIsSorting(false);
                setArray(arr);
            }, T*newAnimations.length+100);
        }

        function qs(array, low, high) {
            if (low < high) {
                var pi = partition(array, low, high);
                qs(array, low, pi-1);
                qs(array, pi+1, high);
            }
        }  
        
        function partition(array, low, high) {
            var pivot = array[high];
            var i = low-1;

            for (var j = low; j <= high-1; j++) {
                const animation = {};
                animation.comparison = [i+1,j, high];
                if (array[j].value < pivot.value) {
                    i++;
                    animation.swap = [i,j, high];
                    swap(array, i, j);
                    
                } else {
                    animation.swap = [j,j, high];
                }
                animations.push(animation);
            }
            const animation = {};
            animation.comparison = [i+1, high, high];
            animation.swap = [i+1, high, high];
            swap(array, i+1, high);
            animations.push(animation);
            return (i+1);
        }
    };

    // -------------------- MERGE SORT ---------------------

    const mergeSortAlgo = () => {
        var arr = [...array];
        if (isSorted(arr)) return;
        setIsSorting(true);

        const animations = Algos.mergeSort(arr);
        const newAnimations = [];
        for (const animation of animations) {
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for (let i = 0; i < newAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const color = i % 3 === 0 ? 'red' : 'blue';
                const [barInd1, barInd2] = newAnimations[i];
                const barStyle1 = arrayBars[barInd1].style;
                const barStyle2 = arrayBars[barInd2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = color;
                    barStyle2.backgroundColor = color;
                }, T * i);
            } else {
                setTimeout(() => {
                    const [barInd1, newHeight] = newAnimations[i];
                    const barStyle1 = arrayBars[barInd1].style;
                    barStyle1.height = `${newHeight}%`;
                }, T * i );
            }
        }
        
        setTimeout(() => {
            setIsSorting(false);
            setArray(arr);
        }, T*newAnimations.length);
        
        
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
            bubble: bubbleSort,
            isSorting,
            setIsSorting,
            quickSort: quickSort,
            mergeSort: mergeSortAlgo,
            speed,
            setSpeed,
        }}>
            {props.children}
        </ParametersContext.Provider>
    )

}