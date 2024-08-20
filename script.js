
  // write a function to find the largest number in an array using reduce method

  function findLargestNumber(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }

      console.log(findLargestNumber([2,4,6,8,10, 12]));
    }   

    
    return largest;

   
  
  }

  // write a function to find the smallest number in an array using reduce method



