// function chunkArrayInGroups(arr, size) {
//     var new_array = [];
//     var counter = 1
//     for (var i = 0; i < arr.length; i++) {
//     if (counter === 1){
//       counter++
//       var temp_array = []
//       temp_array.push(counter)
//       console.log(temp_array)
//       console.log(counter)
//     } else if ((counter > 1) && (counter < size)){
//       counter++
//       temp_array.push(counter)
//
//     } else if (counter === size){
//
//       temp_array.push(counter)
//       new_array.push(temp_array)
//       counter = 1
//     }
//     }
//     console.log(new_array)
// }
// chunkArrayInGroups([1,2,3,4,5,4,3,2,1,2,3,3,2,], 4)
//
// function chunkArrayInGroups(arr, size){
//   var new_array = []
//   while(arr.length >= 0){
//     if (arr.length > size){
//     var temp_array = []
//     var sliced = arr.slice(0, size)
//     new_array.push(sliced)
//
//     arr = arr.length - sliced.length
//     console.log(sliced.length)
//     console.log(arr.length)
//     } else if (arr.length < size) {
//     var temp_array = []
//     console.log(arr.length)
//
//     }
//   }
//   console.log(new_array)
// }
//
// // - create holder array
// -while array is more than negative
// -IF the array lenght is more than step, create blank array
// - slice off the size of step from the array
// (if array is 5, step is 4, slice of 4)
// - push this into the blank array
// -push this into the holder array
// - reassing value of array -subract the step from it each time (if array is 10, step 2, each time, 2 would be decucted)
//
// - IF the array length is less than step,
//////////////////////////////////////

// function chunk(arr, step){
//
//   var holder_arr = []
//
//
//     for(var i=0;i<arr.length;i++){
//       if (arr.length > step) {
//       console.log(true)
//
//       console.log(arr + " arr at top of loop")
//
//       var spliced = arr.splice(0,step) //splice off arr and
//       console.log(spliced + " spliced")
//
//       console.log(arr + " arr after splice")
//
//       holder_arr.push(spliced) //push slices
//       console.log("spliced pushed")
//       console.log(arr.length)
//     } if (arr.length < step){
//       // console.log(false)
//       holder_arr.push(arr)
//       // console.log("waka waka");
//     }
//     }
//     return holder_arr
//   }
//
// console.log(chunk([0, 1, 2, 3, 4, 5], 2))

// function chunkArrayInGroups(arr,size){
//   var arr1 =[]
//   var arr2 =[]
//   var arr3 = []
//   var current = 0;
//
//     for(var i = 0;i<arr.length;i++){
//       console.log(`${arr.length - i}:size ${size}`)
//       //push into array 1
//       arr1.push(arr[i])
//       // increment
//       current++
//     // console.log(current)
//       if(current === size){
//         // if increment === num divider
//       // console.log(`equal ${current} : ${num}`)
//         //push copy of array 1 into array 2
//         arr2.push(arr1)
//       // console.log('pushed', 'arr2:'+arr2)
//         // erase arr1
//         arr1 = []
//         // reset increment
//         current = 0
//       } else if((arr.length - i) < size){
//         arr2.push(arr1)
      // }
//
//   }
//    return arr2
//  }
//
//
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))

// //////////////////WRKING
// function chunkArrayInGroups(arr, size) {
//   var holder_arr = [];
//   for (var i = 0; i <= arr.length; i++) {
//     var spliced = arr.splice(0,size);
//      //splice off arr and
//     holder_arr.push(spliced); //push slices
//   }
//   if ((arr.length < size) && (arr.length > 0)){
//     holder_arr.push(arr)
//   }
//   return holder_arr;
// }

// chunkArrayInGroups(arr,size){
//     var current = 0;
//     for(var i = 0;i <arr.length;i++){
//      console.log(`${arr.length - i}:size ${size}`)
//      //push into array 1
//      arr1.push(arr[i])
//      // increment
//      current++
//    // console.log(current)
//      if(current === size){
//        // if increment === num divider
//      // console.log(`equal ${current} : ${num}`)
//        //push copy of array 1 into array 2
//        arr2.push(arr1)
//      // console.log('pushed', 'arr2:'+arr2)
//        // erase arr1
//        arr1 = []
//        // reset increment
//        current = 0
//      } else if((arr.length - i) < size){
//        arr2.push(arr1)
//      }
//
//  }
//   return arr2
// }


//DIDN'T WORK
// function chunkArrayInGroups(arr, size){
//     var arr1 = [];
//     var counter = 0;
//     var currentIndex = 0;
//     var lastIndex = 0;
//     for(var i = 0;i < arr.length;i++){
//         // current needs +1 to work with slice
//         currentIndex = i+1
//         counter++
//         if(counter === size){
//             console.log(i, size)
//             // first time through needs 0 index
//             if(i < size){
//                 lastIndex = 0;
//             }
//             console.log(`last:${lastIndex}`)
//             console.log(`currentIndex:${currentIndex}`)
//         	var slice = arr.slice(lastIndex, currentIndex)
//             //0,2 2,4, 4,6
//         	arr1.push(slice)
//             // reset last to current
//         	lastIndex = currentIndex
//             counter=0
//         }
//     }
//         return arr1
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 5, 6],4))

function chunkArrayInGroups(arr,size){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count = i + 1
    }
    
}
chunkArrayInGroups([1,2,3])
