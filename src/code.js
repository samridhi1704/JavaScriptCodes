"use strict"


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. Map //returns  an entirely new array object

function customMap(arr, callback)
{
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++)
    {
        mappedArray.push(callback(arr[i]));
    }
    return mappedArray;
}

let numbers = [1, 2, 3, 4, 5];
//call the function (1st method)
/*
let mappedArray = customMap(numbers, function(num)
{
    return num * 2;
});
*/

//Arrow function the band the elememts lexically (2nd method)

let mappedArray= customMap(numbers, num => num * 2);

//output

console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Filter : Return  An array of elements that pass the test.

function filterArray(arr , callback)
{
  let filteredArray =[];
  for(let i=0;i<arr.length;i++)
  {
    if (callback(arr[i])) //checks if the number needs yo be included or not
     {
            filteredArray.push(arr[i]);
      }
  }
  return filteredArray;
}

let num =[1,2,3,4,5];

// calling the Function
/*
let filteredArray = filterArray(num , function(num)
{
   return num%2==0;
  // return true;
   //return false;
});
*/
//Using the Arrow Function

let filteredArray = filterArray(num , num => num % 2==0);

//output
console.log(filteredArray);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Reduce : used in data manipulation whcih reduces an array to a single value

let reduceArray = [15.5, 2.3, 1.1, 4.7];
let sumArray = 0;

// Looping through the array and add rounded numbers to the sum
for (let i = 0; i < reduceArray.length; i++)
{
    let roundedNum = 0;
    let decimalPart = reduceArray[i] % 1; // Get the decimal part of the number
    let integerPart = reduceArray[i] - decimalPart; // Get the integer part of the number

    // Round the decimal part
    if (decimalPart >= 0.5)
    {
        roundedNum = integerPart + 1;
    } else
    {
        roundedNum = integerPart;
    }

    // Add the rounded number to the sum
    sumArray += roundedNum;
}
//output
console.log(sumArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. forEach : method calls a function for each element in an array.

let sumForEach = 0;
let numForEach = [65, 44, 12, 4];

// loop through the array and add each element to the sum

for (let i = 0; i < numForEach.length; i++)
 {
    sumForEach += numForEach[i];
}

//output
console.log(sumForEach);
