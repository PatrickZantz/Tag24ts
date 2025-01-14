//### 1 ###

// function showHello(): void {
//   document.body.innerHTML = "Hallo";
// }

// function showSum(a: number, b: number): void {
//   console.log(a + b);
// }

// function showMultiplication(a: number, b: number): void {
//   window.alert(a * b);
// }

// function logObjectProperties(obj: object): void {
//   console.log(Object.keys(obj));
// }

const showHello = (): void => {
  document.body.innerHTML = "Hallo";
};

const showSum = (a: number, b: number): void => {
  console.log(a + b);
};

const showMultiplication = (a: number, b: number): void => {
  window.alert(a * b);
};

const logObjectProperties = (obj: object): void => {
  console.log(Object.keys(obj));
};

//### 2 ###
// Definition des Monster-Typs
type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};

// Funktion zum Erstellen eines Monsters mit Default-Parametern
function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  return {
    name,
    type,
    health,
    strength,
    speed,
  };
}

// Erstellen von Monstern mit unterschiedlicher Anzahl an Parametern
const monster1 = createMonster("Draco", "Dragon"); // 2 Parameter
const monster2 = createMonster("Fang", "Wolf", 120); // 3 Parameter
const monster3 = createMonster("Shadow", "Ghost", 80, 60); // 4 Parameter
const monster4 = createMonster("Blaze", "Phoenix", 150, 70, 40); // 5 Parameter

// Ausgabe der erstellten Monster in der Konsole
console.log(monster1);
console.log(monster2);
console.log(monster3);
console.log(monster4);

//### 3 ###

interface ColorScheme {
  background: string;
  text: string;
  id: string;
}

const colorSchemes: ColorScheme[] = [
  { id: "ball1", background: "#4CAF50", text: "#800080" },
  { id: "ball2", background: "#666699", text: "#DAA520" },
  { id: "ball3", background: "#000033", text: "#FF8C00" },
  { id: "ball4", background: "#000080", text: "#00CED1" },
];

const changeColors = (scheme: ColorScheme): void => {
  const body = document.body;
  const heading = document.querySelector("h1");

  if (heading) {
    body.style.backgroundColor = scheme.background;
    heading.style.color = scheme.text;
    console.log(
      `Colors changed - Background: ${scheme.background}, Text: ${scheme.text}`
    );
  }
};

// Bonus: Generiere SuperBalls aus dem Array
const generateSuperBalls = (): void => {
  const container = document.querySelector(".superball-container");
  if (container) {
    container.innerHTML = "";
    colorSchemes.forEach((scheme) => {
      const ball = document.createElement("div");
      ball.className = `superball ${scheme.id}`;
      ball.addEventListener("click", () => changeColors(scheme));
      container.appendChild(ball);
    });
  }
};

// Event Listener Setup
document.addEventListener("DOMContentLoaded", () => {
  generateSuperBalls();

  // Initialer Log
  console.log("SuperBalls initialized with color schemes:", colorSchemes);
});
