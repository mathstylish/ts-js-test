const persons = require('./0-dados')

function showNameAndAge(person) {
  const name = person.name
  const birthDayYear = person.birthday.split('-')[0]
  const age = new Date().getFullYear() - birthDayYear - 1
  console.log(`${name}, ${age}`)
}

persons.forEach(person => showNameAndAge(person))
