import "./pizza";
import "./permission";
import "./color";
import "./error";

// Enum für Wochentage
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Ausgabe der Werte für Monday bis Sunday
console.log("Wochentage:");
for (let day = Weekday.Monday; day <= Weekday.Sunday; day++) {
  console.log(Weekday[day]);
}

// Enum für Monate
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// Ausgabe aller Monatswerte
console.log("\nMonate:");
for (let month in Month) {
  if (isNaN(Number(month))) {
    console.log(month);
  }
}
