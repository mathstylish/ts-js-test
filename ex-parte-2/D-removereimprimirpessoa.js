const persons = require('./0-dados')

function deleteById(id) {
  const person = persons[id-1]
  delete person
  return person
}

console.log(deleteById(2))
