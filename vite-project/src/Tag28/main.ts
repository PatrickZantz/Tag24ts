function showPersonInfo(name: string, city: string, age: number): void {
  const roundedAge = Math.floor(age);
  console.log(
    `Hallo, mein Name ist ${name}. Ich bin ${roundedAge} Jahre alt. Ich komme aus ${city}.`
  );
}

showPersonInfo("Patrick", "Weinheim", 37);
//

function multiplyAndDivide(a: number, b: number): void {
  console.log(`Multiplikation: ${a * b}`);

  if (b === 0) {
    console.error("Division durch 0 nicht erlaubt");
  } else {
    console.log(`Division: ${a / b}`);
  }
}
console.log("Test mit 10 und 2:");
multiplyAndDivide(10, 2);

console.log("\nWeitere Tests:");
console.log("30 und 20:");
multiplyAndDivide(30, 20);

console.log("\n100 und 100:");
multiplyAndDivide(100, 100);

console.log("\n5 und 0:");
multiplyAndDivide(5, 0);

console.log("\n45 und 173:");
multiplyAndDivide(45, 173);

console.log("\n1 und 1000:");
multiplyAndDivide(1, 1000);

//
function intro1(): void {
  console.log("Hello Function");
}

const intro2 = (): void => console.log("Hello Function");
intro1(); // Gibt "Hello Function" in der Konsole aus
intro2();

//
function showHero(
  heroName: string,
  heroPower: string,
  heroEnemy: string
): void {
  const nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}`;
  const powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}`;
  const enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;

  console.log(`${nameOutput}\n${powerOutput}\n${enemyOutput}`);
}

// Aufruf der Funktion mit Beispielargumenten
showHero("Spider-Man", "Spinnenkräfte", "Green Goblin");
showHero("Wonder Woman", "übermenschliche Stärke", "Ares");

//
function returnOne(): number {
  return 1;
}

const x: number = 1;
const y: number = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
}

//
function multiplyByTwo(num: number): number {
  return num * 2;
}

// Testen der Funktion
const result = multiplyByTwo(5);
console.log(result);

//
function calculateAge(birthYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Testen der ersten Funktion
const myAge = calculateAge(1990); // Angenommen, Sie sind 1990 geboren
console.log(`Mein Alter ist: ${myAge} Jahre`);

function compareAges(myBirthYear: number, otherBirthYear: number): number {
  const myAge = calculateAge(myBirthYear);
  const otherAge = calculateAge(otherBirthYear);
  const ageDifference = Math.abs(myAge - otherAge);
  return ageDifference;
}

// Testen der zweiten Funktion
const ageDifference = compareAges(1990, 1985); // Angenommen, Sie sind 1990 und der andere Teilnehmer 1985 geboren
console.log(`Die Altersdifferenz beträgt: ${ageDifference} Jahre`);

//
function introduceMyself(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: number,
  wohnort: string
): void {
  console.log(
    "Mein Name ist " +
      vorname +
      " " +
      nachname +
      ". " +
      "Ich bin in " +
      geburtsort +
      " geboren. " +
      "Ich lerne bei SuperCode. " +
      "Ich bin " +
      alter +
      " Jahre alt. " +
      "Ich wohne in " +
      wohnort +
      "."
  );
}

// Aufruf der Funktion mit Beispieldaten
introduceMyself("Patrick", "Zantz", "Hirschberg(a.d.Bergstr.)", 37, "Weinheim");

//BONUS
class BasketballScoreboard {
  private homeScore: number = 0;
  private awayScore: number = 0;

  constructor() {
    this.initializeListeners();
    this.updateDisplay();
  }

  private addPoints(team: "home" | "away", points: number): void {
    if (team === "home") {
      this.homeScore += points;
    } else {
      this.awayScore += points;
    }
    this.updateDisplay();
  }

  private reset(): void {
    this.homeScore = 0;
    this.awayScore = 0;
    this.updateDisplay();
  }

  private updateDisplay(): void {
    const homeDisplay = document.querySelector(".home-score") as HTMLElement;
    const awayDisplay = document.querySelector(".away-score") as HTMLElement;

    if (homeDisplay) homeDisplay.textContent = this.homeScore.toString();
    if (awayDisplay) awayDisplay.textContent = this.awayScore.toString();
  }

  private initializeListeners(): void {
    // Home team buttons
    document
      .querySelector(".home-plus-one")
      ?.addEventListener("click", () => this.addPoints("home", 1));
    document
      .querySelector(".home-plus-two")
      ?.addEventListener("click", () => this.addPoints("home", 2));
    document
      .querySelector(".home-plus-three")
      ?.addEventListener("click", () => this.addPoints("home", 3));

    // Away team buttons
    document
      .querySelector(".away-plus-one")
      ?.addEventListener("click", () => this.addPoints("away", 1));
    document
      .querySelector(".away-plus-two")
      ?.addEventListener("click", () => this.addPoints("away", 2));
    document
      .querySelector(".away-plus-three")
      ?.addEventListener("click", () => this.addPoints("away", 3));

    // Reset button
    document
      .querySelector(".reset-button")
      ?.addEventListener("click", () => this.reset());
  }
}

// Initialisierung des Scoreboards
const scoreboard = new BasketballScoreboard();
