const persons = require('./0-dados')

function totalWithoutComplement() {
  const hasComplement = person => person.address.complement
  let total = 0
  for (let person of persons) {
    if (!hasComplement(person)) {
      total++
    }
  }
  return total
}

console.log(`Total de ${totalWithoutComplement()} pessoas sem complemento`)
