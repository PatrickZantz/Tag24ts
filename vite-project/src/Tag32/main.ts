// 1
type StarWarsActor = [string, string];

const starWarsActor: StarWarsActor = ["Luke Skywalker", "Mark Hamill"];

const starWarsActors: StarWarsActor[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
];

// 2

// Definition des Tuple-Typs für einen Mitarbeitenden
type Employee = [number, string, string, number];

// Array von Mitarbeitenden-Tupeln
const employees: Employee[] = [
    [1, "Max Mustermann", "Entwicklung", 65000],
    [2, "Anna Schmidt", "Marketing", 58000],
    [3, "Lukas Weber", "Vertrieb", 62000],
    [4, "Sophie Bauer", "Personalwesen", 55000],
    [5, "Tom Schulz", "Finanzen", 70000]
];

// Ausgabe aller Mitarbeitenden auf der Konsole
console.log("Mitarbeitendenliste:");
employees.forEach(([id, name, department, salary]) => {
    console.log(`ID: ${id}, Name: ${name}, Abteilung: ${department}, Jahresgehalt: ${salary} €`);
});


// 3

// Erstellen des Sets mit Anfangswerten
const starWarsCharacters = new Set<string>([
    "Luke Skywalker",
    "Darth Vader",
    "Obi Wan Kenobi"
]);

// Ausgabe des initialen Set-Inhalts
console.log("Initiales Set:");
console.log(starWarsCharacters);

// Hinzufügen von "Leia Organa"
starWarsCharacters.add("Leia Organa");

// Ausgabe des Set-Inhalts nach dem ersten Hinzufügen
console.log("\nSet nach Hinzufügen von Leia Organa:");
console.log(starWarsCharacters);

// Erneutes Hinzufügen von "Leia Organa"
starWarsCharacters.add("Leia Organa");

// Ausgabe des Set-Inhalts nach dem zweiten Hinzufügen
console.log("\nSet nach erneutem Hinzufügen von Leia Organa:");
console.log(starWarsCharacters);

// 4
// Erstellen des Arrays mit Marvel-Charakteren
const marvelCharacters: string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"];

// Hinzufügen von "Iron Man" und "Thor" erneut
marvelCharacters.push("Iron Man", "Thor");

// Ausgabe des Arrays
console.log("Array Inhalt:");
console.log(marvelCharacters);

// Erstellen eines Sets basierend auf dem Array
const marvelCharactersSet: Set<string> = new Set(marvelCharacters);

// Ausgabe des Sets
console.log("\nSet Inhalt:");
console.log(marvelCharactersSet);

// 5
// Erstellen der Map für Lieblingsbands und ihre Mitglieder
const favoriteBands: Map<string, string[]> = new Map([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
    ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
    ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);

// Ausgabe der initialen Größe der Band-Map
console.log("Initiale Größe der Band-Map:", favoriteBands.size);

// Hinzufügen einer weiteren Band
favoriteBands.set("Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]);

// Ausgabe der neuen Größe der Band-Map
console.log("Neue Größe der Band-Map nach Hinzufügen:", favoriteBands.size);

// Holen eines Eintrags aus der Map (Kraftwerk)
const kraftwerkMembers = favoriteBands.get("Kraftwerk");

// Ausgabe des letzten Mitglieds von Kraftwerk
if (kraftwerkMembers) {
    const lastMember = kraftwerkMembers[kraftwerkMembers.length - 1];
    console.log("Letztes Mitglied von Kraftwerk:", lastMember);
} else {
    console.log("Kraftwerk nicht gefunden in der Map.");
}

//

// Prüfen, ob die Band "Metallica" in der Map enthalten ist
console.log("Ist Metallica in der Map enthalten?", favoriteBands.has("Metallica"));

// Einen doppelten Eintrag anlegen (z.B. für "The Beatles")
favoriteBands.set("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr", "Stuart Sutcliffe"]);

// Den Eintrag für "The Beatles" aus der Map holen und ausgeben
const beatlesMembers = favoriteBands.get("The Beatles");
console.log("Aktueller Eintrag für The Beatles:", beatlesMembers);

// Kommentar zum zurückgegebenen Eintrag
// Der zurückgegebene Eintrag ist der zuletzt gesetzte Wert für den Schlüssel "The Beatles".
// Die Map überschreibt den vorherigen Wert mit dem neuen Wert, anstatt beide zu behalten.
// Daher sehen wir die aktualisierte Liste der Mitglieder, einschließlich Stuart Sutcliffe.

//

const favoriteBands2: Map<string, string[]> = new Map([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
    ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
    ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);

favoriteBands2.forEach((members, band) => {
    members.forEach(member => {
        if (member.length > 12) {
            console.log(`Band: ${band}, Member: ${member}, Length: ${member.length}`);
        }
    });
});


//

// Deklaration des Arrays mit den Freundesnamen
const friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

// Ausgabe mit klassischer for-Schleife
console.log("Ausgabe mit for-Schleife:");
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}

// Ausgabe mit for...of-Schleife
console.log("\nAusgabe mit for...of-Schleife:");
for (const name of friendNames) {
    console.log(name);
}
