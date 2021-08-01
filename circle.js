var a = [
  "harsh",
  "parimal",
  "mangal",
  "aditya",
  "kartik",
  "anand",
  "ankesh",
  "kunal gaurav",
  "ahsish",
  "ankur",
  "shivam",
  "harsh bardhan",
  "shubham",
  "satyam",
  "shubham ramdiri",
  "golu",
  "ravi kishan",
  "kunal",
  "abhishek",
  "ankush",
  "ankit",
  "nihal",
  "hari om",
  "sanu",
  "raja",
  "uttkarsh",
  "shivam ramdiri",
  "angadh",
  "tushar",
  "aman",
  "rohit",
  "lla",
  "gatu",
  "mihir arya",
  "batu",
  "anshu",
  "sneh saurav",
  "raman",
  "arnav",
  "ankur",
  "abhishek d",
  "alok",
  "rohan",
  "aditya",
  "satyam ",
  "aditya",
  "sudhanshu",
  "monu",
  "sonu",
  "akash",
  "parth",
  "mohan",
];
alert("welcome to my_circle Database.... ");
var p = prompt("Please enter your name=");
//console.log(new Date());
var count = 0;
var position = 0;
console.log("enter the lenght of list=" + a.length);
for (var i = 0; i < a.length; i++) {
  if (p[0] == a[i][0]) {
    console.log(a[i]);

    if (p == a[i]) {
      count = count + 1;
      position = i;
    }
  }
}
if (count > 0) {
  console.log("input found!");
  console.log("position of your input is=" + position);
} else {
  console.log("input not found!");
}
var random = new Array();
var sum = 0;
for (var i = 0; i <= a.length; i++) {
  random.push(Math.floor(Math.random() * 10));
  sum += random[i];
}
console.log("at " + new Date() + " : code=", sum);
