const findTheOldest = function(people) {
    let oldest = people[0];
    for (person of people){
        oldest_age = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        person_age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        if (person_age > oldest_age) {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
