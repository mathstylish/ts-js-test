function arraySort(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  console.log(`Array ordenado: ${array}`)
}

const array = [15, 33, 2, 47, 9, 13, 72, 27, 83]
arraySort(array)
