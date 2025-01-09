// ###########################################

function getHighestNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Das Array darf nicht leer sein");
  }

  let highest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }

  return highest;
}

console.log(getHighestNumber([4, 6, 6, 7, 9, 9, 4, 32, 2, 4, 5]));

// ###########################################
function getNumberOfVowels(str: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  return count;
}
console.log(getNumberOfVowels("IJZGFIUZFGuzGjgkjgkjzgZFKZkjhgkjJG757JKG"));

// ###########################################
function addToFifty(): void {
  let sum = 0;

  while (sum <= 50) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    sum += randomNumber;
  }

  console.log(`${sum} > 50. Stopping right here.`);
}

addToFifty();

// ###########################################
function calculateSum(): void {
  const maxNumber = document.getElementById("maxNumber") as HTMLInputElement;
  const firstNumber = document.getElementById(
    "firstNumber"
  ) as HTMLSelectElement;
  const secondNumber = document.getElementById(
    "secondNumber"
  ) as HTMLSelectElement;
  const resultDiv = document.getElementById("result") as HTMLSelectElement;

  const max = parseInt(maxNumber.value);
  const first = parseInt(firstNumber.value);
  const second = parseInt(secondNumber.value);

  if (!maxNumber.value) {
    resultDiv.textContent = "Fehler: Bitte geben Sie eine Zahl ein!";
    return;
  }

  if (first === second) {
    resultDiv.textContent = "Fehler: Bitte wählen Sie unterschiedliche Zahlen!";
    return;
  }

  let sum = 0;
  let numbers: number[] = [];

  for (let i = 0; i < max; i++) {
    if (i % first === 0 || i % second === 0) {
      sum += i;
      numbers.push(i);
    }
  }

  resultDiv.textContent = `Teilbare Zahlen: ${numbers.join(", ")}
                          Summe: ${sum}`;
  console.log(resultDiv.textContent);
}
