// Teil 1: Math Funktionen
const zahlen: number[] = [
    399, 10, 186, 45, 9, 171, 491, 128, 24, 288, 56, 444, 217, 111, 187, 89, 270,
    485, 481, 179, 290, 14, 292, 250, 463, 189, 434, 184, 124, 443, 119, 23, 453,
    305, 68, 477, 58, 90, 347, 147, 64, 259, 131, 153, 29, 116,
];
console.log(Math.min(...zahlen));
console.log(Math.max(...zahlen));

// Teil 2: Früchte Interface
type Frucht = {
    farbe: string;
    groesse: string;
    //! istSuess: boolean;
};

const roteFrucht: Frucht = { farbe: "rot", groesse: "gross" };
const grueneFrucht: Frucht = { farbe: "gruen", groesse: "klein" };
const gelbeFrucht: Frucht = { farbe: "gelb", groesse: "gross" };
const fruechte: Frucht[] = [roteFrucht, grueneFrucht, gelbeFrucht];

fruechte.forEach((frucht) => {
    fruechte[2];
    console.log(frucht.groesse);
    console.log(frucht.farbe);
});
console.log(fruechte.length);
const rosaneFrucht: Frucht = { farbe: "rosa", groesse: "riesig" };

// Teil 3: Haustiere Interface
type Haustier = {
    art: string;
    rufnamen: string[];
};

const meineTiere: Haustier[] = [
    {
        art: "Katze",
        rufnamen: ["Gipsy", "Nala", "Dinky"],
    },
    {
        art: "Hunde",
        rufnamen: ["Knöpfchen", "Pinselchen", "Droopy"],
    },
    {
        art: "Hamster",
        rufnamen: ["Tröpfchen", "Winselchen", "Froopy"],
    },
];

console.log(meineTiere[0].rufnamen[1]);
console.log(meineTiere[1].rufnamen[2]);
console.log(meineTiere[1].rufnamen);

meineTiere[1].rufnamen[2] = "Snoopy";
meineTiere[0].rufnamen[2] = "Pinky";

// Teil 4: Büro Interface
type Buero = {
    tisch: {
        fach: string;
    };
    regal: {
        "Oberes Fach": {
            Mappe1: string;
            Mappe2: string;
        };
        "Unteres Fach": string;
    };
};

const meinBuero: Buero = {
    tisch: {
        fach: "Hefter",
    },
    regal: {
        "Oberes Fach": {
            Mappe1: "Dokumente",
            Mappe2: "Geheimnisse",
        },
        "Unteres Fach": "Cola",
    },
};

console.log(meinBuero.regal["Oberes Fach"].Mappe2);
console.log(meinBuero.regal["Unteres Fach"]);
console.log(meinBuero.tisch.fach);

// Teil 5: Musik Interface
type Album = {
    interpret: string;
    albumName: string;
    erscheinungsjahr: number;
    medien: string[];
    goldStatus: boolean;
};

const lieblingsAlben: Album[] = [
    {
        interpret: "The Beatles",
        albumName: "Abbey Road",
        erscheinungsjahr: 1969,
        medien: ["LP", "CD", "MC", "Download"],
        goldStatus: true,
    },
    {
        interpret: "Pink Floyd",
        albumName: "Dark Side of the Moon",
        erscheinungsjahr: 1978,
        medien: ["CS", "CD", "LP", "Download"],
        goldStatus: true,
    },
    {
        interpret: "Led Zeppelin",
        albumName: "Led Zeppelin IV",
        erscheinungsjahr: 1971,
        medien: ["CS", "LP", "Download"],
        goldStatus: true,
    },
    {
        interpret: "Metallica",
        albumName: "Kill 'Em All und Ride the Lightning",
        erscheinungsjahr: 1983,
        medien: ["LP", "CD", "MC", "Download"],
        goldStatus: true,
    },
    {
        interpret: "Linkin Park",
        albumName: "Meteora",
        erscheinungsjahr: 2003,
        medien: ["LP", "CD", "MC", "Download"],
        goldStatus: true,
    }
];

// Teil 6: Künstler Interface
type Aktivzeit = {
    beginn: number;
    ende: number | string;
    zusatz?: number;
};

type Kuenstler = {
    kuenstlerName: string;
    herkunft: string;
    aktivePeriode: Aktivzeit;
    musikstil: string;
};

const musiker: Kuenstler[] = [
    { kuenstlerName: 'The Beatles', herkunft: 'United Kingdom', aktivePeriode: { beginn: 1960, ende: 1970 }, musikstil: "Rock / Pop" },
    { kuenstlerName: 'Elvis Presley', herkunft: 'United States', aktivePeriode: { beginn: 1954, ende: 1977 }, musikstil: "Rock and roll" },
    { kuenstlerName: 'Michael Jackson', herkunft: 'United States', aktivePeriode: { beginn: 1964, ende: 2009 }, musikstil: "Pop / Rock / Dance / Soul / R&B" },
    { kuenstlerName: 'Elton John', herkunft: 'United Kingdom', aktivePeriode: { beginn: 1964, ende: "present" }, musikstil: "Pop / Rock" },
    { kuenstlerName: 'Madonna', herkunft: 'United States', aktivePeriode: { beginn: 1979, ende: "present" }, musikstil: "Pop / Dance / Electronica" },
    { kuenstlerName: 'Led Zeppelin', herkunft: 'United Kingdom', aktivePeriode: { beginn: 1968, ende: 1980 }, musikstil: "Hard rock / Blues rock / Folk rock" },
    { kuenstlerName: 'Rihanna', herkunft: 'United States', aktivePeriode: { beginn: 2005, ende: "present" }, musikstil: "R&B / Pop / Dance / Hip-hop" },
    { kuenstlerName: 'Pink Floyd', herkunft: 'United Kingdom', aktivePeriode: { beginn: 1965, ende: 1996, zusatz: 2014 }, musikstil: "Progressive rock / Psychedelic rock" },
];

const sortiertMusiker = musiker.sort((a, b) => a.kuenstlerName.localeCompare(b.kuenstlerName));
console.log(sortiertMusiker);
