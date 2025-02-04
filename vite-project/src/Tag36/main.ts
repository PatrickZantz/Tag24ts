// 1.3
interface HTMLElementWithSiblings extends HTMLElement {
  nextElementSibling: HTMLElement | null;
  previousElementSibling: HTMLElement | null;
}

document.addEventListener("DOMContentLoaded", (): void => {
  const buttons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("button");
  const output: HTMLElement | null = document.querySelector("#output");
  const ul: HTMLElement | null = document.querySelector("ul");

  buttons.forEach((button: HTMLButtonElement): void => {
    button.addEventListener("click", (): void => {
      if (!ul || !output) return;

      let result: string = "";

      switch (button.id) {
        case "firstElementChild":
          result = ul.firstElementChild?.textContent || "";
          break;

        case "lastElementChild":
          result = ul.lastElementChild?.textContent || "";
          break;

        case "firstElementChild nextElementSibling":
          result =
            (ul.firstElementChild as HTMLElementWithSiblings)
              ?.nextElementSibling?.textContent || "";
          break;

        case "lastElementChild previousElementSibling":
          result =
            (ul.lastElementChild as HTMLElementWithSiblings)
              ?.previousElementSibling?.textContent || "";
          break;
      }

      output.textContent = result;
    });
  });
});

// 1.9
document.addEventListener("DOMContentLoaded", (): void => {
  const form1: HTMLFormElement | null = document.getElementById(
    "form1"
  ) as HTMLFormElement;
  const select1: HTMLSelectElement | null =
    form1.querySelector("#farbeAuswahlen");
  const button1: HTMLButtonElement | null = form1.querySelector("#button");

  if (form1 && select1 && button1) {
    form1.addEventListener("submit", (event: Event): void => {
      event.preventDefault();
    });

    button1.addEventListener("click", (): void => {
      select1.remove(select1.selectedIndex);
    });
  }
});

// 2.2
type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

document.addEventListener("DOMContentLoaded", (): void => {
  const form2 = document.getElementById("form2") as HTMLFormElement;

  form2.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const vorname = (form2.querySelector("#vorname") as HTMLInputElement).value;
    const nachname = (form2.querySelector("#nachname") as HTMLInputElement)
      .value;
    const land = (form2.querySelector("#land") as HTMLSelectElement).value;

    const person: SimplePerson = {
      vorname: vorname,
      nachname: nachname,
      land: land,
    };

    console.log("Form Values:", { vorname, nachname, land });
    console.log("SimplePerson Object:", person);
  });
});

// 2.4
function removeSpaces(str: string): string {
  return str.replace(/\s+/g, "");
}

document.addEventListener("DOMContentLoaded", (): void => {
  const form3 = document.getElementById("form3") as HTMLFormElement;
  const selectElement = form3.querySelector(
    "#farbeAuswahlen"
  ) as HTMLSelectElement;
  const buttonElement = form3.querySelector("#button") as HTMLButtonElement;

  buttonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();

    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedColor = selectedOption.textContent;
    const colorWithoutSpaces = removeSpaces(selectedColor || "");

    document.body.style.backgroundColor = colorWithoutSpaces;
  });
});

// Global counter
let count: number = 0;

// Helper function to convert decimal to hex
function decToHex(dec: number): string {
    const hex = dec.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

document.addEventListener("DOMContentLoaded", (): void => {
    // Button color changers
    const pinkButton = document.getElementById("'pink-button") as HTMLButtonElement;
    const purpleButton = document.getElementById("'purple-button") as HTMLButtonElement;
    const orangeButton = document.getElementById("'orange-button") as HTMLButtonElement;

    // Slider elements
    const redSlider = document.getElementById("red-slider") as HTMLInputElement;
    const greenSlider = document.getElementById("green-slider") as HTMLInputElement;
    const blueSlider = document.getElementById("blue-slider") as HTMLInputElement;

    // Button click handlers
    const handleButtonClick = (color: string): void => {
        document.body.style.backgroundColor = color;
        count++;
        console.log(`Button clicked ${count} times`);
    };

    pinkButton.addEventListener("click", () => handleButtonClick("pink"));
    purpleButton.addEventListener("click", () => handleButtonClick("purple"));
    orangeButton.addEventListener("click", () => handleButtonClick("orange"));

    // Slider change handler
    const updateColorFromSliders = (): void => {
        const red = parseInt(redSlider.value);
        const green = parseInt(greenSlider.value);
        const blue = parseInt(blueSlider.value);
        
        const hexColor = `#${decToHex(red)}${decToHex(green)}${decToHex(blue)}`;
        document.body.style.backgroundColor = hexColor;
        count++;
        console.log(`Color changed ${count} times`);
    };

    // Add event listeners to sliders
    redSlider.addEventListener("input", updateColorFromSliders);
    greenSlider.addEventListener("input", updateColorFromSliders);
    blueSlider.addEventListener("input", updateColorFromSliders);
});
