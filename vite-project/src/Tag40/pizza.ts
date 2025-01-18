// Enum für Pizzagrößen
enum PizzaSize {
  Small,
  Medium,
  Large,
  Family
}

// Enum für Pizzazutaten
enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Mushrooms,
  Pepperoni,
  Olives,
  Bacon,
  Pineapple,
  Spinach,
  Tomatoes
}

// Typ für Pizza
type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients[];
};

// 4 Pizza-Objekte mit verschiedenen Größen und Belägen
const margherita: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Tomatoes]
};

const pepperoniLover: Pizza = {
  size: PizzaSize.Large,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Pepperoni, PizzaIngredients.Onion]
};

const vegetarianDelight: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Mushrooms, PizzaIngredients.Olives, PizzaIngredients.Spinach]
};

const familyFeast: Pizza = {
  size: PizzaSize.Family,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Bacon, PizzaIngredients.Onion, PizzaIngredients.Pepperoni]
};

// Optional: Ausgabe der Pizza-Objekte zur Überprüfung
console.log("Margherita:", margherita);
console.log("Pepperoni Lover:", pepperoniLover);
console.log("Vegetarian Delight:", vegetarianDelight);
console.log("Family Feast:", familyFeast);
