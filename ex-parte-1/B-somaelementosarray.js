function arraySum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  console.log(`Soma dos elementos ${array} é ${total}`)
}

const array = [15, 33, 2, 47, 9, 13, 72, 27, 83]
arraySum(array)
