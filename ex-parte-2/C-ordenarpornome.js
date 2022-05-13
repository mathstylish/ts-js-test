const persons = require('./0-dados')

function sortByName(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

const personsByName = persons.sort(sortByName)
console.log(personsByName)
