const bubbleSort = (array) => {
    var arr = [...array];
    
    var count = 0;

        for (var j = 0; j < arr.length; j++) {
            count++;
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 

          
};

export default bubbleSort;