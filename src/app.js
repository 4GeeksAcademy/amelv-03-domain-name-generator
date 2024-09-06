/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here

//   console.log("Hello Rigo from the console!");
// };

const domainName = () => {
  let first = ["the", "our", "my", "your"];
  let second = ["great", "big", "moving", "landscape", "cool", "super"];
  let third = [
    "jogger",
    "racoon",
    "guys",
    "industry",
    "organization",
    "company",
    "skyscraper"
  ];
  let ext = [".com", ".gov", ".org", ".edu"];

  //start   //end     //direction
  for (let i = 0; i < first.length; i++) {
    for (let a = 0; a < second.length; a++) {
      for (let b = 0; b < third.length; b++) {
        for (let c = 0; c < ext.length; c++) {
          console.log(first[i] + second[a] + third[b] + ext[c]);
        }
      }
    }
  }
};
