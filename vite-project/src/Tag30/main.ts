// 1.2
function sortDescending<T>(array: T[]): T[] {
  return array.sort().reverse();
}

// Array von Programmiersprachen
const programmingLanguages: string[] = ["TypeScript", "Swift", "Ruby", "Python", "PHP", "JavaScript", "Java", "Go", "CSS", "C++", "C#", "C"];

// Array von europäischen Ländern
const europeanCountries: string[] = ["Germany", "France", "Italy", "Spain", "Portugal", "Netherlands", "Belgium", "Austria", "Switzerland", "Sweden", "Norway", "Denmark"];

// Sortiere und gib die Ergebnisse aus
console.log("Absteigend sortierte Programmiersprachen:", sortDescending(programmingLanguages));
console.log("Absteigend sortierte europäische Länder:", sortDescending(europeanCountries));


// 2.1
function reverseString(text: string): string {
  return text.split('').reverse().join('');
}

// Test mit einzelnen Wörtern
console.log(reverseString("Sergio"));     // "oigreS"
console.log(reverseString("Hannah"));     // "hannaH"
console.log(reverseString("Regallager")); // "regallageR"
console.log(reverseString("Reliefpfeiler")); // "reliefpfeileR"
console.log(reverseString("Rentner"));    // "rentneR"

// Test mit Sätzen
console.log(reverseString("Ella mag alle Bohnen")); // "nenhoB ella gam allE"
console.log(reverseString("han nesaH has ennaH")); // "HannE sah Hasen nah"

// 1.11
function searchString(): void {
  // Test-String
  const tonguetwister: string = "Peter Piper picked a peck of pickled peppers";
  
  // Case-sensitive Suche
  console.log("Case-sensitive Suche:");
  console.log(tonguetwister.includes("Piper"));  // true
  console.log(tonguetwister.includes("piper"));  // false
  
  // Case-insensitive Suche
  console.log("\nCase-insensitive Suche:");
  console.log(tonguetwister.toLowerCase().includes("piper"));  // true
  
  // Suche ab bestimmtem Index
  console.log("\nSuche ab Index:");
  console.log(tonguetwister.includes("peck"));       // true - sucht von Anfang
  console.log(tonguetwister.includes("peck", 20));   // false - sucht ab Index 20
}

// Funktion aufrufen
searchString();


// 3.1
function findArtwork(artworkName: string): void {
  const artworks: string[] = [
      "Die Sternennacht - Vincent van Gogh",
      "Guernica - Pablo Picasso",
      "Die Geburt der Venus - Sandro Botticelli",
      "Die Nachtwache - Rembrandt",
      "Die Mona Lisa - Leonardo da Vinci",
      "Die Kartoffelesser - Vincent van Gogh",
      "Der Schrei - Edvard Munch",
      "Das letzte Abendmahl - Leonardo da Vinci",
      "Die freudige Botschaft - James Tissot",
      "Der Garten der Lüste - Hieronymus Bosch"
  ];

  const artworkDates: string[] = [
      "Die Sternennacht - 1889",
      "Guernica - 1937",
      "Die Geburt der Venus - 1486",
      "Die Nachtwache - 1642",
      "Die Mona Lisa - 1503",
      "Die Kartoffelesser - 1885",
      "Der Schrei - 1893",
      "Das letzte Abendmahl - 1495",
      "Die freudige Botschaft - 1885",
      "Der Garten der Lüste - 1505"
  ];

  const artworkIndex = artworks.findIndex(artwork => 
      artwork.toLowerCase().includes(artworkName.toLowerCase())
  );

  if (artworkIndex === -1) {
      console.log(`Artwork ${artworkName} not found`);
      return;
  }

  const artwork = artworks[artworkIndex].split(" - ");
  const date = artworkDates[artworkIndex].split(" - ")[1];

  console.log(`'${artwork[0]}' wurde von ${artwork[1]} im Jahre ${date} gemalt`);
}

// Testaufrufe
findArtwork("Sternennacht");
findArtwork("Mona Lisa");
findArtwork("Picasso");
findArtwork("Unbekanntes Werk");

//** MAP */

// 1.2
// Array mit Getränken
const drinks: string[] = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

// Alle Getränke in Großbuchstaben umwandeln
const upperDrinks: string[] = drinks.map(drink => drink.toUpperCase());

// Ausgabe der Großbuchstaben-Version
console.log(upperDrinks);

// Ausgabe mit "I like" Präfix
drinks.map(drink => console.log(`I like ${drink}`));


// 1.4
const fahrenheitTemps: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

// Umrechnung von Fahrenheit in Celsius mit map()
const celsiusTemps: number[] = fahrenheitTemps.map(fahrenheit => 
    Number(((fahrenheit - 32) / 1.8).toFixed(1))
);

// Ausgabe der Ergebnisse
console.log("Temperaturen in Celsius:", celsiusTemps);


// 1.5
const checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const modifiedNumbers: number[] = checkNumber.map((num: number): number => {
  if (num % 3 === 0) {
      return num + 100;
  }
  return num;
});

console.log(modifiedNumbers);

// 1.6
const album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg"
];

const processedFiles: string[] = album.map((filename: string): string => {
  // Prüfe ob der Dateiname einen Punkt enthält
  if (filename.includes('.')) {
      // Extrahiere den Namen vor der Endung und konvertiere zu Kleinbuchstaben
      return filename.split('.')[0].toLowerCase();
  }
  // Wenn keine Endung vorhanden, gebe "invalid" zurück
  return "invalid";
});

console.log(processedFiles);

// 1.8
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Traditionelle Funktionsschreibweise
function printEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(function(number: number): boolean {
        return number % 2 === 0;
    });
}

function printOddNumbers(numbers: number[]): number[] {
    return numbers.filter(function(number: number): boolean {
        return number % 2 !== 0;
    });
}

// Ergebnisse speichern
const evenNumbers: number[] = printEvenNumbers(zahlen);
const oddNumbers: number[] = printOddNumbers(zahlen);

console.log("Gerade Zahlen:", evenNumbers);
console.log("Ungerade Zahlen:", oddNumbers);

// Arrow-Function-Schreibweise
const evenNumbersArrow: number[] = zahlen.filter((number: number): boolean => number % 2 === 0);
const oddNumbersArrow: number[] = zahlen.filter((number: number): boolean => number % 2 !== 0);

console.log("Gerade Zahlen (Arrow):", evenNumbersArrow);
console.log("Ungerade Zahlen (Arrow):", oddNumbersArrow);





