let firstName = "peter";
let lastName ="maffay";

console.log(firstName.length, lastName.length)
let fullName = firstName + lastName;


const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(earthQuote.indexOf('h'));
earthQuote.indexOf("Earth");
earthQuote.indexOf("Moon");

const susisStatus = 'Susi is going to codingschool';
console.log(susisStatus.slice(5,8));


let idx = susisStatus.indexOf("is"); 
console.log(susisStatus.slice(susisStatus.indexOf("Susi"), "Susi".length));
console.log(susisStatus.slice(idx, idx + "is".length));
console.log(susisStatus.slice(idx, idx + "is going to ".length) + 
susisStatus.slice(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length));

console.log(susisStatus.slice(susisStatus.indexOf("Susi is"), susisStatus.indexOf("Susi is") + "Susi is".length));

console.log(susisStatus.slice(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length));

// document.body.innerHTML = susisStatus.slice(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length);

/**
 * #####################
 */
console.log("scnd")
console.log("scnd")
console.log("scnd")

const whereIsSusi = 'Susi is back from codingschool';
console.log(susisStatus.substring(5,8));


idx = susisStatus.indexOf("is"); 
console.log(susisStatus.substring(susisStatus.indexOf("Susi"), "Susi".length));
console.log(susisStatus.substring(idx, idx + "is".length));
console.log(susisStatus.substring(idx, idx + "is going to ".length) + 
susisStatus.substring(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length));

console.log(susisStatus.substring(susisStatus.indexOf("Susi is"), susisStatus.indexOf("Susi is") + "Susi is".length));

console.log(susisStatus.substring(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length));

// document.body.innerHTML = susisStatus.substring(susisStatus.indexOf("school"), susisStatus.indexOf("school") + "school".length);

/**
 * 1_7
 */
let stat = 'Susi is bad at codingschool';

console.log(stat.replace("Susi", "Sam"));
console.log(stat.replace("bad", "good"));
console.log(stat.replace("bad", "good").replace("Susi", "Sam"));


/**
 * 1_(8):P
 */
const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";  
const and = "and";
// document.body.innerHTML = infoAboutSam + and + susi;


document.body.innerHTML = document.body.innerHTML.concat("Sam is going to school and to the movie theater<br>", 
"Sam is going to the movie theater<br>", 
"Susi and Sam are going to school<br>", 
"Susi and Sam are going to gym and to the movie theater<br>", 
"Susi is going to school and to the movie theater<br>");

document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";
document.body.innerHTML += "<br>";

document.body.innerHTML += "sam ".toUpperCase() + "IS GOIND TO ".toLowerCase() + "school".toUpperCase() + "<br>";
document.body.innerHTML += "sam ".toLowerCase() + "is goind to ".toUpperCase() + "sChOoL".toLowerCase() + "<br>";


/**
 * Number-Methods-TS-Level-1_3
 */

let testNr = 15.16698
let f0 = testNr.toString()
let f1 = testNr.toString(2)
let f2 = testNr.toString(8)
let f3 = testNr.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

testNr = 7.78714
f0 = testNr.toString()
f1 = testNr.toString(2)
f2 = testNr.toString(8)
f3 = testNr.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr = "12.3"
let testNum = +testStr
f0 = testNum.toString()
f1 = testNum.toString(2)
f2 = testNum.toString(8)
f3 = testNum.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

testStr = "3.14random"
let testNum1 = +testStr.slice(0,4)
f0 = testNum1.toString()
f1 = testNum1.toString(2)
f2 = testNum1.toString(8)
f3 = testNum1.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

testStr = "32px"
let testNum2 = +testStr.slice(0,2)
f0 = testNum2.toString()
f1 = testNum2.toString(2)
f2 = testNum2.toString(8)
f3 = testNum2.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testbol1 = true
let testNum3 = +testbol1
f0 = testNum3.toString()
f1 = testNum3.toString(2)
f2 = testNum3.toString(8)
f3 = testNum3.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testbol2 = false
let testNum4 = +testbol2
f0 = testNum4.toString()
f1 = testNum4.toString(2)
f2 = testNum4.toString(8)
f3 = testNum4.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr1 = "321"
let testNum5 = +testStr1
f0 = testNum5.toString()
f1 = testNum5.toString(2)
f2 = testNum5.toString(8)
f3 = testNum5.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);

let testStr2 = "Supercode"
let testNum6 = +testStr2.length
f0 = testNum6.toString()
f1 = testNum6.toString(2)
f2 = testNum6.toString(8)
f3 = testNum6.toString(16)
console.log(f0);
console.log(f1);
console.log(f2);
console.log(f3);
