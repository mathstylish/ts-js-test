function hasNumber(number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      console.log(`${array[i]} existe, está no índice ${i}`)
      return
    }
  }
  console.log('Não existe')
}

const array = [15, 33, 2, 47, 9, 13, 72, 27, 83]
const number = 47
hasNumber(number)
