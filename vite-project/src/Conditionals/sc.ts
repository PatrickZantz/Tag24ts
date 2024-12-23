/**
 * ##### 2_1 #####
 */

const john = 22 * 5 + 170;
const meike = 34 * 5 + 168;

console.log(`john score: ${john}`);
console.log(`meike score: ${meike}`);

if (john <= meike) {
  console.log(`Meike gewinnt das Spiel mit ${meike} Punkten`);
} else if (john >= meike) {
  console.log(`John gewinnt das Spiel mit ${meike} Punkten`);
} else {
  console.log("draw");
}

/**
 * ##### 2_3 #####
 */
const num = 123;
const diff = num - 27;
if (diff >= 27) {
  console.log(num - 27 * 2);
} else {
  console.log(num - 27);
}

/**
 * ##### 1_4 #####
 */
const btnClick = document.getElementById("btn-sub");
btnClick?.addEventListener("click", passwordSafty);
function passwordSafty() {
  const pwIn = (document.getElementById("pw") as HTMLInputElement).value;
  const len = pwIn.length;
  const out = document.getElementById("msg") as HTMLDivElement;

  out.innerText =
    len >= 8 ? "Passwort gespeichert" : " PW zu kurz. Min 8 Zeichen";
}

/**
 * ##### 2_2 #####
 */
const isOnline = true;
const isPremiumUser = true;
const isAdult = true;

const isOnlineStatus = isOnline
  ? console.log("online")
  : console.log("offline");
let monthyFee;
const isPremiumStatus = isPremiumUser
  ? (monthyFee = 19.99)
  : (monthyFee = 12.99);
const isAdultStatus = isAdult
  ? console.log("Willkommen")
  : window.alert("Keine Berechtigung");

const randomAge = 69;
const randomSalary = 1337;

let isMiddleAged;
const ageChecker =
  randomAge <= 40 && randomAge >= 60
    ? (isMiddleAged = true)
    : (isMiddleAged = false);
console.log(isMiddleAged);
const salaryChecker =
  randomSalary >= 10000
    ? console.log("You are rich")
    : randomSalary > 1500
    ? console.log("Not to bad")
    : console.log("Not that much");

/**
 * ##### 2_4 #####
 */
const zahl1 = Math.floor(Math.random() * 77);
const zahl2 = Math.floor(Math.random() * 77);
console.log(`Zahl 1: ${zahl1}, Zahl 2: ${zahl2}`);
if (zahl1 === zahl2) {
  console.log("Was für ein Zufall");
} else if (zahl1 > zahl2) {
  console.log("Erste Zahl größer");
} else {
  console.log("Zweite Zahl größer");
}
