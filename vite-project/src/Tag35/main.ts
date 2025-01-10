//##### DOM-TS_Level-1_4 ######

function addTextWithTimestamp(): void {
  const inputElement = document.getElementById("textInput") as HTMLInputElement;
  const outputElement = document.getElementById("output") as HTMLElement;

  if (inputElement && outputElement) {
    const userInput = inputElement.value;
    const timestamp = new Date().toLocaleString("de-DE");
    const newEntry = `<p>${timestamp}: ${userInput}</p>`;

    outputElement.innerHTML += newEntry;
    inputElement.value = "";
  }
}

(
  document.getElementById("addTextButton") as HTMLButtonElement
).addEventListener("click", addTextWithTimestamp);

//##### DOM-TS-Level-1_2 ######

// Info-Bereich mit Überschriften
const infoElement: HTMLElement | null = document.getElementById("info");
if (infoElement) {
  infoElement.innerHTML = "<h1>Hello World</h1><h2>How are you?</h2>";
}

// Container-Bereich mit Paragraph und Input
const containerElement: HTMLElement | null =
  document.getElementById("container");
if (containerElement) {
  // Paragraph hinzufügen
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.textContent = "This is a paragraph";
  containerElement.appendChild(paragraph);

  // Input-Element erstellen und konfigurieren
  const inputElement: HTMLInputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  containerElement.appendChild(inputElement);
}

//##### DOM-TS-Level-1_3 ######

// Gallery section auswählen
const gallerySection: HTMLElement | null = document.getElementById("gallery");

if (gallerySection) {
  // Array mit Bilddaten
  const images = [
    { src: "image1.jpg", alt: "Erstes Bild", caption: "Fig. 1" },
    { src: "image2.jpg", alt: "Zweites Bild", caption: "Fig. 2" },
    { src: "image3.jpg", alt: "Drittes Bild", caption: "Fig. 3" },
  ];

  // Drei figure-Elemente erstellen und zur Gallery hinzufügen
  images.forEach((imageData) => {
    // Figure-Element erstellen
    const figure: HTMLElement = document.createElement("figure");

    // Bild-Element erstellen
    const img: HTMLImageElement = document.createElement("img");
    img.setAttribute("src", imageData.src);
    img.setAttribute("alt", imageData.alt);

    // Figcaption erstellen
    const figcaption: HTMLElement = document.createElement("figcaption");
    figcaption.textContent = imageData.caption;

    // Elemente zusammenfügen
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallerySection.appendChild(figure);
  });
}

//##### Dom-Elements-TS-Level-1_1 ######

// DOM-Elemente auswählen
const inputElement: HTMLInputElement | null = document.getElementById(
  "input"
) as HTMLInputElement;
const buttonElement: HTMLElement | null = document.getElementById("enter");
const listElement: HTMLElement | null = document.getElementById("list");

// Funktion zum Hinzufügen eines Listeneintrags
function addListItem(): void {
  if (inputElement && listElement && inputElement.value.trim() !== "") {
    // Neues Listenelement erstellen
    const listItem: HTMLLIElement = document.createElement("li");

    // Text aus Input-Feld dem Listenelement zuweisen
    listItem.textContent = inputElement.value;

    // Listenelement zur Liste hinzufügen
    listElement.appendChild(listItem);

    // Input-Feld leeren
    inputElement.value = "";
  }
}

// Event-Listener für den Button
if (buttonElement) {
  buttonElement.addEventListener("click", addListItem);
}

// Event-Listener für Enter-Taste
if (inputElement) {
  inputElement.addEventListener("keypress", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      addListItem();
    }
  });
}

//##### Dom-Elements-TS-Level-1_2 ######

// Zustandsvariable für Toggle-Funktion
let isColorChanged: boolean = false;

// Funktion zum Ändern der Hintergrundfarbe
function changeBackgroundColor(): void {
  const elements: HTMLCollectionOf<Element> =
    document.getElementsByClassName("example");

  // Durch alle Elemente mit der Klasse 'example' iterieren
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    if (!isColorChanged) {
      element.style.backgroundColor = "#4CAF50"; // Grün
    } else {
      element.style.backgroundColor = ""; // Zurück zur ursprünglichen Farbe
    }
  }

  // Toggle-Zustand umschalten
  isColorChanged = !isColorChanged;
}

// Event-Listener für den Button hinzufügen
document
  .querySelector("button.example")
  ?.addEventListener("click", changeBackgroundColor);

//##### DOM-TS-Level-1_5 ######
function showURL(): void {
  // URL aus window.location.href abrufen
  const currentUrl: string = window.location.href;

  // Element für die Ausgabe erstellen
  const outputElement: HTMLParagraphElement = document.createElement("p");
  outputElement.textContent = currentUrl;

  // URL im DOM anzeigen
  document.body.appendChild(outputElement);
}

// Event-Listener für den Button hinzufügen
const urlButton: HTMLElement | null = document.getElementById("urlButton");
if (urlButton) {
  urlButton.addEventListener("click", showURL);
}

//##### Dom-Elements-TS-Level-2_3 ######

function changeColors(): void {
  const nav = document.getElementsByTagName("nav")[0];
  const links = document.getElementsByTagName("a");
  const button = document.getElementById("changeButton");

  const colors = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362", "#666", "#333"];
  let currentIndex = 0;

  if (button) {
    button.addEventListener("click", () => {
      // Hintergrundfarbe der Navigation ändern
      if (nav) {
        nav.style.backgroundColor = colors[currentIndex % colors.length];
      }

      // Farben der Links ändern
      for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor =
          colors[(currentIndex + i + 1) % colors.length];
      }

      // Button-Farbe ändern
      button.style.backgroundColor = colors[(currentIndex + 2) % colors.length];

      currentIndex++;
    });
  }
}

// Funktion beim Laden der Seite aufrufen
document.addEventListener("DOMContentLoaded", changeColors);
