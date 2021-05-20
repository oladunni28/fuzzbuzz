//Task 1
function convertFahrToCelsius(fahr){
    if (isNaN(fahr)) {
        console.log(`${fahr} is not a valid number, but a ${typeof(fahr)}`)
    }

    else if (Array.isArray(fahr)){
        console.log(`${fahr}is not a valid number,but a ${typeof(fahr)}`)
    }
    else{
        let x = parseFloat(fahr)
        let cel = ((x-32) * (5/9))

        console.log(x)
        console.log(cel.toFixed(4))
    }
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius({temp:0});
convertFahrToCelsius("stress");
convertFahrToCelsius([1,2,3]);
    

//TASK 2
function checkYuGiOh(n){
  if (isNaN(n)){
      console.log(`invalid parameter: ${n}`)
  }
  let size = parseInt(n) //convert n to interger
  let array = []
  for(let i = 0; i < size; i++){
      array[i] = i + 1;
     array = array.map(i =>{
          if (i % 30 === 0){
              return 'yu-gi-oh'
          }else if (i % 15 === 0){
              return 'gi-oh'
          }else if (i % 10 === 0){
              return 'yu-oh'
          }else if (i % 6 === 0){
              return 'yu-gi'
          }else if (i % 5 === 0){
              return 'oh'
          }else if (i % 3 === 0){
              return 'gi'
          }else if (i % 2 === 0){
              return 'yu'
          }else {return i
          }
      })
    }
console.log(size)
console.log(array)

}checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh")
checkYuGiOh(100)





 