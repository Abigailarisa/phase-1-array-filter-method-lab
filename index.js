function findMatching(drivers, driver) {
return drivers.filter(couldMatch => couldMatch.toUpperCase() === driver.toUpperCase());
}

function fuzzyMatch(drivers, possibleString ) {
    return drivers.filter(firstLetter =>firstLetter.toUpperCase().indexOf(possibleString.toUpperCase()) === 0);}


function matchName(drivers, possibleName) {
return drivers = drivers.filter(eachElement => eachElement.name === possibleName);}