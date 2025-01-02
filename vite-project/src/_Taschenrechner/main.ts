class Calculator {
  // Speichert die aktuelle Eingabe als String
  private currentInput: string = "0";
  // Speichert das Zwischenergebnis der Berechnung
  private currentTotal: number | null = null;
  // Speichert den aktuell gewählten Operator
  private currentOperator: string | null = null;
  // Flag, das anzeigt, ob eine neue Zahl eingegeben wird
  private isNewInput: boolean = true;

  constructor(private displayElement: HTMLInputElement) {
    this.updateDisplay();
    this.setupKeyboardInput();
  }

  // Aktualisiert das Anzeigefeld mit der aktuellen Eingabe
  private updateDisplay(): void {
    this.displayElement.value = this.currentInput;
  }

  // Wird aufgerufen, wenn eine Zahl gedrückt wird
  public numberPressed(num: string): void {
    if (this.isNewInput) {
      // Ersetzt die aktuelle Eingabe, wenn es eine neue Zahl ist
      this.currentInput = num;
      this.isNewInput = false;
    } else {
      // Fügt die Ziffer zur aktuellen Eingabe hinzu
      this.currentInput += num;
    }
    this.updateDisplay();
  }

  // Wird aufgerufen, wenn ein Operator gedrückt wird
  public operatorPressed(operator: string): void {
    if (this.currentTotal === null) {
      // Setzt den ersten Wert als currentTotal
      this.currentTotal = parseFloat(this.currentInput);
    } else if (this.currentOperator !== null && !this.isNewInput) {
      // Führt die vorherige Berechnung aus, wenn ein neuer Operator gedrückt wird
      this.calculate();
    }
    this.currentOperator = operator;
    this.isNewInput = true;
  }

  // Führt die Berechnung aus
  public calculate(): void {
    if (this.currentTotal !== null && this.currentOperator !== null) {
      const currentValue = parseFloat(this.currentInput);
      switch (this.currentOperator) {
        case "+":
          this.currentTotal += currentValue;
          break;
        case "-":
          this.currentTotal -= currentValue;
          break;
        case "*":
          this.currentTotal *= currentValue;
          break;
        case "/":
          if (currentValue !== 0) {
            this.currentTotal /= currentValue;
          } else {
            this.currentTotal = null;
            this.currentInput = "Error";
          }
          break;
      }
      this.currentInput =
        this.currentTotal !== null ? this.currentTotal.toString() : "Error";
      this.updateDisplay();
      this.isNewInput = true;
    }
  }

  // Setzt den Taschenrechner zurück
  public clear(): void {
    this.currentTotal = null;
    this.currentOperator = null;
    this.currentInput = "0";
    this.isNewInput = true;
    this.updateDisplay();
  }

  // Richtet die Tastatureingabe ein
  private setupKeyboardInput(): void {
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      if ("0123456789.".includes(key)) {
        this.numberPressed(key);
      } else if ("+-*/".includes(key)) {
        this.operatorPressed(key);
      } else if (key === "Enter" || key === "=") {
        this.calculate();
      } else if (key === "Escape" || key === "c" || key === "C") {
        this.clear();
      }
      // Verhindert das Standardverhalten für bestimmte Tasten
      if (key === "Enter" || key === "=" || key === "Escape") {
        event.preventDefault();
      }
    });
  }
}

// Event-Listener für das DOM-Content-Loaded-Event
document.addEventListener("DOMContentLoaded", () => {
  // Holt das Display-Element
  const displayElement = document.getElementById("display") as HTMLInputElement;
  if (!displayElement) {
    console.error("Display element not found");
    return;
  }
  // Erstellt eine neue Instanz des Taschenrechners
  const calculator = new Calculator(displayElement);

  // Fügt Event-Listener für alle Buttons hinzu
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      const value = target.textContent;
      if (value) {
        if ("0123456789.".includes(value)) {
          calculator.numberPressed(value);
        } else if ("+-*/".includes(value)) {
          calculator.operatorPressed(value);
        } else if (value === "=") {
          calculator.calculate();
        } else if (value === "C") {
          calculator.clear();
        }
      }
    });
  });
});
