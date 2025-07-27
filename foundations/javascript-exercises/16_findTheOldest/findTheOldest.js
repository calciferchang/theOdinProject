const findTheOldest = function (people) {
  const ages = people.map(
    (person) =>
      (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth
  );
  const oldest = ages.indexOf(Math.max(...ages));
  return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
