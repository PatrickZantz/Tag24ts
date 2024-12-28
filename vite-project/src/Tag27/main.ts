// Überprüfung der Skriptausführung
console.log("Skript gestartet");

// Funktion zur Anzeige der Konsolenausgaben im HTML
function setupConsoleOutput() {
  const originalConsole = console.log;
  const consoleOutput = document.querySelector("#console-output");

  if (!consoleOutput) {
    const div = document.createElement("div");
    div.id = "console-output";
    document.body.appendChild(div);
  }

  console.log = function(...args) {
    const message = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');

    const logElement = document.createElement("div");
    logElement.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    consoleOutput?.appendChild(logElement);
    
    originalConsole.apply(console, args);
  };
}

// HTML-Struktur anpassen
const style = document.createElement("style");
style.textContent = `
  #console-output {
    background-color: #f4f4f4;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: monospace;
  }
  #console-output div {
    margin: 5px 0;
    padding: 3px;
    border-bottom: 1px solid #eee;
  }
`;
document.head.appendChild(style);

// Konsolen-Ausgabe einrichten
setupConsoleOutput();

// Funktion zur Umwandlung der Wochentagnummer in einen String
function getWeekdayString(weekdayNumber: number): string {
  const weekdays = [
    "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
  ];
  return weekdays[weekdayNumber - 1] || "Fehler";
}

// Beispiel für Wochentagsumwandlung
const wP = 3;
const weekdayAsNumber = Number(wP);
const weekdayAsString = getWeekdayString(weekdayAsNumber);
console.log(`Wochentag: ${weekdayAsString}`);

// Funktion zum Vergleich von Zufallszahlen
function compareRandomNumbers(max: number): void {
  const zahl1 = Math.floor(Math.random() * max);
  const zahl2 = Math.floor(Math.random() * max);
  console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);
  
  if (zahl1 === zahl2) {
    console.log("Was für ein Zufall");
  } else {
    console.log(zahl1 > zahl2 ? "Erste Zahl größer" : "Zweite Zahl größer");
  }
}

compareRandomNumbers(77);

// Funktion zur Umwandlung von Schulnoten in Text
function getSchoolGradeText(grade: number): string {
  const gradeTexts = [
    "sehr gut", "gut", "befriedigend", "ausreichend", "mangelhaft", "ungenügend"
  ];
  return grade >= 1 && grade <= 6 ? gradeTexts[grade - 1] : "Das ist keine gültige Schulnote.";
}

const schoolGrade = Math.floor(Math.random() * 10 + 1);
console.log(`Schulnote: ${schoolGrade}`);
console.log(`Bewertung: ${getSchoolGradeText(schoolGrade)}`);

// Funktionen für Verkaufsquartal und -leistung
function getSalesQuarter(month: number): string {
  return `${Math.ceil(month / 3)}. Quartal`;
}

function getSalesPerformance(sales: number): string {
  if (sales <= 2500) return "schlecht";
  if (sales <= 5000) return "mittelmäßig";
  if (sales <= 7500) return "hoch";
  return "unglaublich";
}

const salesMonth = Math.round(Math.random() * 11 + 1);
const totalSales = Math.round(Math.random() * (10000 - 1000) + 1000);
const salesQuarter = getSalesQuarter(salesMonth);
const salesPerformance = getSalesPerformance(totalSales);

console.log(`Im ${salesQuarter} war der Umsatz ${salesPerformance}`);

// Mathematische Operationen
console.log(`PI: ${Math.PI}`);
console.log(`Gerundetes PI: ${Math.round(Math.PI)}`);

// Zahlenratespiel
function playGuessingGame(): void {
  const guessedNumber = prompt("Rate eine Zahl zwischen 1 und 7");
  const randomNumber = Math.floor(Math.random() * 7 + 1);
  
  if (guessedNumber === null) {
    console.log("Spiel abgebrochen");
    return;
  }
  
  console.log(Number(guessedNumber) === randomNumber ? "Richtig geraten!" : "Leider falsch");
}

playGuessingGame();

// Datum und Uhrzeit
const nowDate = new Date();
console.log(`Aktuelles Datum und Uhrzeit: ${nowDate}`);
console.log(`Timestamp: ${Date.now()}`);

// Ausgabe des formatierten Datums
const output = document.querySelector("#ausgabe") as HTMLParagraphElement;
if (output) {
  const { year, month, day, hour, minute, second } = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    day: nowDate.getDate(),
    hour: nowDate.getHours(),
    minute: nowDate.getMinutes(),
    second: nowDate.getSeconds()
  };
  
  output.innerHTML = `${day}.${month}.${year} ${hour}:${minute}:${second}<br>${nowDate.toLocaleString("de-DE")}`;
}

// Eingabeprotokollierung
const input = document.querySelector<HTMLInputElement>("#input");

function logInput(): void {
  console.log(input?.value ?? "Kein Wert");
}

logInput();
