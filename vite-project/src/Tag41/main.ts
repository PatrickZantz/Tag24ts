//## 1 ##


function showTextAfterDelay(text: string, delay: number): void {
  setTimeout(() => {
    console.log(text);
  }, delay * 1000);
}

// Beispielaufruf
showTextAfterDelay("Dieser Text erscheint nach 3 Sekunden", 3);


function countdown(startValue: number): void {
  let count = startValue;
  const intervalId = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log("FERTIG!");
      clearInterval(intervalId);
    }
  }, 1000);
}

// Beispielaufruf
countdown(5);
function startCountdown(): void {
  console.log("Start: Warten für 3 Sekunden..");
  
  let count: number = 10;
  const intervalId = setInterval(() => {
      if (count > 0) {
          console.log(count);
          count--;
      } else {
          clearInterval(intervalId);
          console.log("Endlich Feierabend!");
      }
  }, 1000);

  setTimeout(() => {
      console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
  }, 3000);
}

// Starten der Funktion
startCountdown();

// ## 2 ##
let timeInterval: string | number | NodeJS.Timeout | undefined;
let percentage: number = 100;

const startButton: HTMLButtonElement = document.querySelector('#btn') as HTMLButtonElement;
const displayElement: HTMLDivElement = document.querySelector('.zeit') as HTMLDivElement;

const startCountdown2 = (): void => {
    if (timeInterval) return;
    
    timeInterval = setInterval(() => {
        percentage -= 1;
        displayElement.textContent = `${percentage}%`;
        
        if (percentage <= 0) {
            clearInterval(timeInterval);
            timeInterval = undefined;
            percentage = 100;
        }
    }, 100);
};

startButton.addEventListener('click', startCountdown2);

//## 3 ##

interface BrowserInfo {
  browserName: string;
  architecture: string;
  browserVersion: string;
  windowResolution: string;
  documentDimensions: string;
  colorDepth: number;
  pixelDepth: number;
}

const getBrowserData = (): BrowserInfo => {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  
  if (userAgent.includes("Firefox")) {
      browserName = "Mozilla Firefox";
  } else if (userAgent.includes("Chrome")) {
      browserName = "Google Chrome";
  } else if (userAgent.includes("Safari")) {
      browserName = "Apple Safari";
  } else if (userAgent.includes("Edg")) {
      browserName = "Microsoft Edge";
  }

  return {
      browserName: browserName,
      architecture: navigator.platform,
      browserVersion: navigator.appVersion,
      windowResolution: `${window.innerWidth}x${window.innerHeight}`,
      documentDimensions: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth
  };
};

const displayBrowserInfo = (): void => {
  const info = getBrowserData();
  const container = document.createElement('div');
  container.innerHTML = `
      <h2>BOM Elements</h2>
      <p>Browsername: ${info.browserName}</p>
      <p>Betriebssystem-Architektur: ${info.architecture}</p>
      <p>Browser-Version: ${info.browserVersion}</p>
      <p>Window Auflösung: ${info.windowResolution}</p>
      <p>Dokument Innenhöhe und -breite: ${info.documentDimensions}</p>
      <p>Color Depth: ${info.colorDepth}</p>
      <p>Pixel Depth: ${info.pixelDepth}</p>
  `;
  document.body.appendChild(container);
};

// Führe die Funktion aus, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', displayBrowserInfo);

// ## 4 ##

window.addEventListener('load', (): void => {
  const countElement: HTMLElement | null = document.getElementById('count');
  const messageElement: HTMLElement | null = document.getElementsByClassName('message')[0] as HTMLElement;
  
  if (countElement && messageElement) {
      let count: number = 10;
      
      const countdown = setInterval((): void => {
          count--;
          countElement.textContent = count.toString();
          
          if (count <= 0) {
              clearInterval(countdown);
              messageElement.style.display = 'none';
          }
      }, 1000);
  }
});
