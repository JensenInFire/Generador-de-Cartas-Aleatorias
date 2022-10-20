/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = numerorandom();
};

let numerorandom = () => {
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numeros.length);

  return numeros[indexNumbers];
};

let generateRandomSuit = () => {
  let suits = ["diamon", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};
