import { AirlineSeatReclineExtraTwoTone, RestaurantMenuRounded, SquareFootSharp, SubdirectoryArrowLeftSharp, ViewArrayOutlined } from '@material-ui/icons';
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

    function swap(a, i, j) {
        var temp = a[j];
        a[j] = a[i];
        a[i] = temp;
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

    const bubbleSort = () => {
        const T = 10*(2000/(bins*bins));
        setIsSorting(true);
        var arr = [...array];
        var animations = [];

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length-1; j++) {
                const animation = {};

                if (arr[j].value > arr[j+1].value) {
                    animation.comparison = [j, j+1];
                    animation.swap = [j, j+1];
                    animations.push(animation);
                    swap(arr, j, j+1);
                }

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
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    arrayBars[ind1].style.backgroundColor = color;
                    arrayBars[ind2].style.backgroundColor = color;
                    
                }, T*i) 
                
            } else {
                setTimeout(() => {
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

    const quickSort = () => {
        var arr = [...array];
        setIsSorting(true);


        qs(arr, 0, arr.length-1);
        setArray(arr);

        function qs(a, low, high) {            
            
            if (low < high) {
                var pi = partition(a, low, high);
                qs(a, low, pi-1);
                qs(a, pi+1, high);

            }
        }

        function swap(i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        function partition(arr, l, h) {
            var pivot = arr[h];
            var i = (l - 1);
            var j = l;

            for (var j = l; j <= h-1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(i,j);
                    setArray(arr);
                }
            }
            
            function helper() {
                if (arr[j] < pivot) {
                    i++;
                    swap(i,j);
                    setArray(arr);
                }
                if (j > h-1) {
                    setIsSorting(false);
                }
                j++;
            }
            

            swap(h,i+1);
            setArray(arr);
            return (i+1);
            
        }
    };

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
            bubble: bubbleSort,
            isSorting,
            setIsSorting,
            quickSort: quickSort,
        }}>
            {props.children}
        </ParametersContext.Provider>
    )

}