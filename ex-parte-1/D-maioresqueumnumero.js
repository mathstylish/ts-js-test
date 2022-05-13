function largersThan(number) {
  const largersArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      largersArr.push(array[i])
    }
  }
  console.log(`Maiores que ${number}: ${largersArr}`) 
}
const array = [15, 33, 2, 47, 9, 13, 72, 27, 83]
const number = 13 
largersThan(number)
