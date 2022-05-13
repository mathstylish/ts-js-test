const persons = require('./0-dados')

const getName = person => person.name
const getCity = person => person.address.city

persons.forEach(person => console.log(`${getName(person)} reside em ${getCity(person)}`))
