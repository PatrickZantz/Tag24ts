// Enum für Kleidungsfarben mit Hex-Werten
enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#FFA500",
  Pink = "#FFC0CB",
  Blau = "#0000FF",
  Lila = "#A020F0",
  Grau = "#808080",
}

// Typ für die Farbnamen
//   type ClothingColorValues = `${ClothingColor}`;
type ClothingColorName = keyof typeof ClothingColor;

// Funktion zur Erstellung der Farbauswahl-Buttons
function createColorButtons(): void {
  const colorNames = Object.keys(ClothingColor) as ClothingColorName[];

  for (const colorName of colorNames) {
    const button = document.createElement("button");
    const colorValue = ClothingColor[colorName];
    button.style.backgroundColor = colorValue;
    button.textContent = colorName;
    button.style.margin = "5px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.color = colorValue === ClothingColor.Gelb ? "#000" : "#fff";
    document.body.appendChild(button);
  }
}

// Bonus: Kürzerer Weg mit Object.entries
function createColorButtonsBonus(): void {
  Object.entries(ClothingColor).forEach(([name, hexValue]) => {
    const button = document.createElement("button");
    button.style.backgroundColor = hexValue;
    button.textContent = name;
    button.style.margin = "5px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.color = hexValue === ClothingColor.Gelb ? "#000" : "#fff";
    document.body.appendChild(button);
  });
}

// Aufruf der Funktionen
document.addEventListener("DOMContentLoaded", () => {
  createColorButtons();

  // Trennlinie zwischen den beiden Methoden
  const hr = document.createElement("hr");
  document.body.appendChild(hr);

  createColorButtonsBonus();
});
