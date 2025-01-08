// 1
for (let i = 1; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}

// 2
let numbersToTen: number[] = [];

for (let i = 0; i <= 10; i++) {
  numbersToTen.push(i);
}

console.log(numbersToTen);

// 3
let counter: number = 0;

while (counter < 10) {
  console.log(`Hallo World ${counter}`);
  counter++;
}

// 4
let i: number = 1;
let output: string = "";

do {
  output += `<p>The number is ${i}</p>`;
  i++;
} while (i <= 5);

document.body.innerHTML += output;

// 5
let num: number = 0;
output: "";

do {
  if (num % 2 === 0) {
    output += `<p>The number ${num} is even</p>`;
  }
  num += 1;
} while (num <= 20);

document.body.innerHTML += output;

// 6
function createImageNames(): string[] {
  const returnArray: string[] = [];

  for (let i = 1; i <= 100; i++) {
    const numberPart = i.toString().padStart(3, "0");
    const fileName = `image_${numberPart}.jpg`;
    returnArray.push(fileName);
  }

  return returnArray;
}

console.log(createImageNames());

// 7
function createLoop(): void {
  const input = document.querySelector("input") as HTMLInputElement;
  const outputElement = document.createElement("p");
  outputElement.style.color = "#00FF00";

  input.addEventListener("input", () => {
    const count = parseInt(input.value) || 0;
    const os = "o".repeat(count);
    outputElement.textContent = `L${os}p`;
  });

  document.querySelector("button")?.addEventListener("click", () => {
    const count = parseInt(input.value) || 0;
    const os = "o".repeat(count);
    outputElement.textContent = `L${os}p`;
  });

  document.body.appendChild(outputElement);
}

createLoop();

// 8

const text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

function splitTextIntoBlocks(text: string): string[] {
  const textInBlocksOfHundred: string[] = [];
  const totalLines: number = Math.ceil(text.length / 100);

  for (let i = 0; i < totalLines; i++) {
    const startIndex: number = i * 100;
    const endIndex: number = startIndex + 100;
    const block: string = text.slice(startIndex, endIndex);
    textInBlocksOfHundred.push(`${block} - ${i + 1} of ${totalLines}`);
  }

  return textInBlocksOfHundred;
}

// Funktionsaufruf
console.log(splitTextIntoBlocks(text));
