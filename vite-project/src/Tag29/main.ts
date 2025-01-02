let bucketList = ["Machu Picchu", "Neuseeland", "Island"];
let luckyNumbers = [7, 13, 42];
let favoritePeople = ["Marie", "Thomas", "Sarah"];

// Ausgabe der Arrays in der Konsole
console.log("Bucket List:", bucketList);
console.log("Glückszahlen:", luckyNumbers);
console.log("Liebste Menschen:", favoritePeople);

//**
// Array-TS-Level-1_2
//  */
// Definition der Arrays
let names: string[] = [
  "Bruce",
  "Wayne",
  "Superreich",
  "Farid",
  "Christian",
  "Sergio",
  "Burger",
  "Sushi",
  "Mais-Käsebällchen",
];

// Zugriff auf einzelne Array-Elemente
console.log("Namen im Array:");
console.log(names[0]); // Gibt "Bruce" aus
console.log(names[1]); // Gibt "Wayne" aus
console.log(names[2]); // Gibt "Superreich" aus

// Alternative Schreibweise mit Template Literals
console.log(`Erster Name: ${names[0]}`);
console.log(`Zweiter Name: ${names[1]}`);
console.log(`Dritter Name: ${names[2]}`);

//**
// Array-TS-Level-1_3 (length)
//  */
// Ausgabe der Array-Länge mit length
console.log("Anzahl der Elemente im Array:", names.length);

// Alternative Schreibweise mit Template Literal
console.log(`Das Array enthält ${names.length} Elemente`);

//**
// Array-TS-Level-1_4 (push)
//  */
// Erstellen eines initialen Arrays
let cities: string[] = ["London", "Paris", "New York"];

// Ausgabe des ursprünglichen Arrays und seiner Länge
console.log("Ursprüngliches Array:", cities);
console.log("Ursprüngliche Länge:", cities.length);

// Hinzufügen neuer Werte mit push()
cities.push("Shanghai", "Istanbul");

// Ausgabe des erweiterten Arrays und seiner neuen Länge
console.log("Erweitertes Array:", cities);
console.log("Neue Länge:", cities.length);

//**
// Array-TS-Level-1_5 (pop)
//  */
// Array bucketList
bucketList = ["Buenos Aires", "Iceland", "Amsterdam"];
console.log("Ursprüngliches Array:", bucketList);
const removedFromBucketList = bucketList.pop();
console.log("Entfernt:", removedFromBucketList);
console.log("Array nach pop():", bucketList);

// Array luckyNumbers
luckyNumbers = [21, 77, 111];
console.log("Ursprüngliches Array:", luckyNumbers);
const removedFromLuckyNumbers = luckyNumbers.pop();
console.log("Entfernt:", removedFromLuckyNumbers);
console.log("Array nach pop():", luckyNumbers);

// Array favoritePeople
favoritePeople = ["Suzy", "Lucy", "Macy"];
console.log("Ursprüngliches Array:", favoritePeople);
const removedFromFavoritePeople = favoritePeople.pop();
console.log("Entfernt:", removedFromFavoritePeople);
console.log("Array nach pop():", favoritePeople);


//**
// Array-TS-Level-1_6 (shift)
//  */
// Array favoritePeople vor shift()
favoritePeople = ["Suzy", "Lucy", "Macy"];
console.log("Array vor shift():", favoritePeople);

// Ersten Wert mit shift() entfernen und speichern
const removedPerson = favoritePeople.shift();
console.log("Entfernter erster Wert:", removedPerson);

// Array nach shift() anzeigen
console.log("Array nach shift():", favoritePeople);

//**
// Array-TS-Level-1_7 (unshift)
//  */
// Array mit Städten vor unshift()
cities = ["London", "Paris", "New York"];
console.log("Array vor unshift():", cities);
console.log("Länge vor unshift():", cities.length);

// Zwei neue Städte am Anfang hinzufügen
cities.unshift("Shanghai", "Istanbul");
console.log("Array nach unshift():", cities);
console.log("Länge nach unshift():", cities.length);

//**
// Array-TS-Level-1_8 (slice)
//  */
// Erstellen des Arrays mit Lieblingsreisezielen
const lieblingsreiseziele: string[] = [
  "Paris", 
  "New York", 
  "Detroit", // nicht so beliebter Ort
  "Newark", // nicht so beliebter Ort
  "Tokyo"
];

// Ausgabe des ursprünglichen Arrays
console.log("Ursprüngliches Array:", lieblingsreiseziele);

// Erstellen eines neuen Arrays ohne die unbeliebten Orte
// slice(0,2) nimmt die ersten zwei Elemente und
// slice(4) nimmt den Rest ab Index 4
const bereinigteListe: string[] = [
  ...lieblingsreiseziele.slice(0, 2),
  ...lieblingsreiseziele.slice(4)
];

// Ausgabe des neuen Arrays
console.log("Bereinigtes Array:", bereinigteListe);


//**
// Array-TS-Level-1_9 (push/pop shift/unshift)
//  */
// Initialisierung des Arrays
let numbers: number[] = [23, 54, 75];
console.log(numbers);

// Push: Fügt Elemente am Ende hinzu
numbers.push(11, 32, 42, 5, 71);
console.log(numbers);

// Unshift: Fügt Elemente am Anfang hinzu
numbers.unshift(1, 3, 7, 8, 14);
console.log(numbers);

// Pop: Entfernt die letzten zwei Elemente
numbers.pop();
numbers.pop();
console.log(numbers);

// Shift: Entfernt die ersten zwei Elemente
numbers.shift();
numbers.shift();
console.log(numbers);


//**
// Array-TS-Level-1_14 (copy)
//  */
// Ursprüngliches Array erstellen
let oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

// Referenz erstellen
let actorsReference: string[] = oldHollywoodActors;

// Element hinzufügen (beeinflusst beide Arrays)
actorsReference.push("Marilyn Monroe");

// Ausgabe beider Arrays
console.log("Original:", oldHollywoodActors);
console.log("Referenz:", actorsReference);

// Drei verschiedene Kopiermethoden
let concatCopy: string[] = oldHollywoodActors.concat();
let sliceCopy: string[] = oldHollywoodActors.slice();
let spreadCopy: string[] = [...oldHollywoodActors];

// Änderungen in den Kopien
concatCopy[0] = "James Dean";
sliceCopy[1] = "Grace Kelly";
spreadCopy[2] = "Rita Hayworth";

// Finale Ausgabe aller Arrays
console.log("Original:", oldHollywoodActors);
console.log("Concat-Kopie:", concatCopy);
console.log("Slice-Kopie:", sliceCopy);
console.log("Spread-Kopie:", spreadCopy);
