function showEvens(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      console.log(array[i])
    }
  }
}

const array = [15, 33, 2, 47, 9, 13, 72, 27, 83]
showEvens(array)
