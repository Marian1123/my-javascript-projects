let calculation = localStorage.getItem('calculation') || '';

showCalculation();

document.querySelector('.js-button-1').addEventListener('click', () => {
 calculation += '1';
 showCalculation();
});

document.querySelector('.js-button-2').addEventListener('click', () => {
  calculation += '2';
  showCalculation();
 });

 document.querySelector('.js-button-3').addEventListener('click', () => {
  calculation += '3';
  showCalculation();
 });

 document.querySelector('.js-button-plus').addEventListener('click', () => {
  calculation += ' + ';
  showCalculation();
 });

 document.querySelector('.js-button-4').addEventListener('click', () => {
  calculation += '4';
  showCalculation();
 });

 document.querySelector('.js-button-5').addEventListener('click', () => {
  calculation += '5';
  showCalculation();
 });

 document.querySelector('.js-button-6').addEventListener('click', () => {
  calculation += '6';
  showCalculation();
 });

 document.querySelector('.js-button-minus').addEventListener('click', () => {
  calculation += ' - ';
  showCalculation();
 });

 document.querySelector('.js-button-7').addEventListener('click', () => {
  calculation += '7';
  showCalculation();
 });

 document.querySelector('.js-button-8').addEventListener('click', () => {
  calculation += '8';
  showCalculation();
 });

 document.querySelector('.js-button-9').addEventListener('click', () => {
  calculation += '9';
  showCalculation();
 });

 document.querySelector('.js-button-multiply').addEventListener('click', () => {
  calculation += ' * ';
  showCalculation();
 });

 document.querySelector('.js-button-0').addEventListener('click', () => {
  calculation += '0';
  showCalculation();
 });

 document.querySelector('.js-button-point').addEventListener('click', () => {
  calculation += '.';
  showCalculation();
 });

 document.querySelector('.js-button-equals').addEventListener('click', () => {
  calculation = eval(calculation);
  showCalculation();
 });

 document.querySelector('.js-button-divide').addEventListener('click', () => {
  calculation += ' / ';
  showCalculation();
 });

 document.querySelector('.js-button-clear').addEventListener('click', () => {
  calculation = '';
  showCalculation();
 });

function showCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;

  localStorage.setItem('calculation', calculation);
}