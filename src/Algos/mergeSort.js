export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startInd,
    endInd,
    auxiliaryArray,
    animations
) {
    if (startInd === endInd) return;
    const middleInd = Math.floor((startInd + endInd) / 2);
    mergeSortHelper(auxiliaryArray, startInd, middleInd, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleInd + 1, endInd, mainArray, animations);
    doMerge(mainArray, startInd, middleInd, endInd, auxiliaryArray, animations);
    
}

function doMerge (
    mainArray,
    startInd,
    middleInd,
    endInd,
    auxiliaryArray,
    animations
) {
    let k = startInd;
    let i = startInd;
    let j = middleInd + 1;
    while (i <= middleInd && j <= endInd) {
        const animation = {};
        animation.comparison = [i,j];
        if (auxiliaryArray[i].value <= auxiliaryArray[j].value) {
            animation.swap = [k, auxiliaryArray[i].value];
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animation.swap = [k, auxiliaryArray[j].value];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation);
    }
    while (i <= middleInd) {
        animations.push({
            comparison: [i,i],
            swap: [k,auxiliaryArray[i].value]
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endInd) {
        animations.push({
            comparison: [j,j],
            swap: [k, auxiliaryArray[j].value],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}