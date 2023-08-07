function leapYear(years) {
  var leapYearsArray = [];
  var nonLeapYearsArray = [];

  for (var i = 0; i < years.length; i++) {
    var year = years[i];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYearsArray.push(year);
    } else {
      nonLeapYearsArray.push(year);
    }
  }

  return {
    leapYears: leapYearsArray,
    nonLeapYears: nonLeapYearsArray,
  };
}

var yearToCheck = [2023, 2024, 2025, 2028, 2030];
var result = leapYear(yearToCheck);

console.log('Leap Years array:', result.leapYears);
console.log('Non-Leap Years array:', result.nonLeapYears);
