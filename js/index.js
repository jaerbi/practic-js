/*function sumTo(3) {
    for (var i = 1; i <= 3; i++){
        return 3 + sumTo(3 - 1);
        
          function sumTo(2) {
            var sum = n;
            for (var i = 1; i <= 2; i++){
            return 2 + sumTo(2 - 1);
            
                    function sumTo(1) {
                     var sum = n;
                    for (var i = 1; i <= 1; i++){
                         return 1 + sumTo(1 - 1);
    }
}
document.write(sumTo(3));

function calcFibanachi(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function calcFibanachi(n) {
    if (n < 2) {
        return n;
    }
    else {
        return (calcFibanachi(n - 1) + calcFibanachi(n - 2));
    }
}
document.write(calcFibanachi(7));*/

// function pow(x,n) {

//     for (var i = 1; i < n; i++) {
//          return x = x *  pow(x, n - 1);

//     }
//     return result;
// }
/*function pow(x,n) {
    var result = x;
    for (var i = 1; i < n ; i++){
        result *= pow(x, n - 1);
        return result;
    }
    return result;
}
 alert(pow(2,3));
*/

/*function pow(x,n) {
    if (n != 1) {
        return x * pow(x,n - 1);
    }
    else {
        return x * n;
    }
}
*/
/*document.write(pow(2,4));*/
/*function factorial(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * factorial(n - 1);
    }
}

document.write(factorial(5));
*/


/*function sumTo(n) {
    if (n == 1){
        return 1;
    }
    else {
        return n + sumTo(n - 1);
    }
}*/






























/*function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}*/

/*function sumTo(n) {
  return n * (n + 1) / 2;
}*/

/*function sumTo(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

alert(sumTo(15709));
*/

/*function pow(x,n) {
    var result = x;
    for (var i = 1; i < n ; i++){
        result *= pow(x, n - 1);
        return result;
    }
    return result;
}
 alert(pow(2,3));
*/

/*function victoriyaNeRozymiu(x,n) {
    var result = x;
    if (n != 1) {
        return x * victoriyaNeRozymiu(x, n - 1);
    }
    else {
        result *= n;
    }
    return result;
}
alert(victoriyaNeRozymiu(2,3));*/

/*function sumTo(n) {
    if (n != 1) {
        return n + sumTo(n - 1);
    }
    else {
        return n;
    }
}*/

/*function sumTo(n) {
    var result = n;
    for (var i = 1; i < n; i = i + 1){
        result += i; 
    }
    return result;
}*/
/*
alert(sumTo(3));*/

/*function sumTo(n) {
    if (n != 1){
        return n + sumTo(n - 1);
    }
    else {
        return n;
    }
}

alert(sumTo(3));
*/
/*function pow(x,n) {
    if (n != 1) {
        return x * pow(x, n -1);
    }
    else {
        return x;
    }
    
}
alert( pow(2,3));
*/
/*function pow(x,n) {
    var result = x;
    for (var i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
alert(pow(3,2));*/
/*function pow(x, n) {
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert( pow(4, 3) ); // 8*/
/*function min(a,b){
    var a, b;
    if(a < b) {
        return a;
    }
    else if (a > b) {
        return b;
    }
    else {
        return a;
    }
}

document.write(min(5,5));*/

/*nextPrime:
for (var i = 2; i <= 10; i++){
    for (var j = 2; j < i; j++){
        if ( i % j == 0) continue nextPrime;
    }
    alert(i);
}
*/
/*for (var i = 2; i < 9; i++){
    if(i == 2){
        alert(i);
    }
    if(i % 2 != 0){
        alert(i);
    }
}*/

/*var userNumber = +prompt('Enter your number > 100');

for ( var i = userNumber; i < 100; i++) {
    userNumber = +prompt('Enter your number > 100');
    if ( userNumber > 100) break;
}
*/

/*for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}*/
/*var i = 0;
while (i < 3){
    alert( "номер " + i + "!" );
    i++;
}*/

/*for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
       alert(i); 
    }
}*/

/*var sum = 0;

while (true) {

  var value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );*/

/*var userName = prompt("Введіть ваше ім'я");
var a = Number(prompt('Введіть значення А'));
var b = Number(prompt('Введіть значення B'));
var c = Number(prompt('Введіть значення C'));

var result = myQuadraticEqua(a,b,c);
document.write('Привіт '+ userName + '<br>'+ result);

function myQuadraticEqua(a,b,c){
    if(a === 0){
        result = 'Значення А не має дорівнювати 0';
    }
    
    var d = discriminantCalc();
    var x1,x2;
    if(d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        result = 'Дискримінанта D > 0: D = '+ d +'<br>Рівняння має два корені х1 = '+ x1 +', x2 = '+ x2;
        return result;
    } 
    else if (d === 0){
        x1 = -b / 2*a;
        result = 'Дискримінанта D = 0: D = '+ d +'<br>Рівняння має один корінь х1,x2 = '+ x1;
        return result;
    }
    else {
        result = 'Дискримінанта D < 0: D = '+ d +'<br> Рівняння не має коренів';
        return result;
    }
    
}
function discriminantCalc(){
    return b*b-4*a*c;
}*/
// var age = prompt('Скільки вам років?');

// if (age < 14 || age > 90){
//     alert('Вам немає від 14 до 90');
// }
// if (!(age >= 14 && age <= 90)){
//     alert('Вам немає від 14 до 90');
// }

/*var age = prompt('Скільки вам років?');

if (age >= 14 && age <= 90){
    alert(age+' В потрібному проміжутку між 14 і 90');
}
else{
    alert('Ні '+ age +' не в потрібному проміжутку');
}*/

/*if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
 */

/*var userName = prompt('Привіт ви хто?');


if (userName == 'jaerbi'){
    var pasword = prompt('Введіть пароль');
    if (pasword == 1234){
        alert('Радий вас бачити');
    }
    else if (pasword == null){
        alert('Відміна!!!');
    }
    else {
        alert('Пароль не правильний');
    }
}
else if (userName == null) {
    alert('Вхід відмінено');
}
else {
    alert('Я вас не знаю');
}
*/

/*var number = prompt('Введіть число');

if (number > 0){
    alert('ваше число більше 0');
}
else if (number < 0){
    alert('Число менше 0');
}
else {
    alert('ви ввели число 0');
}*/

/*var nameJS = prompt('Яке офіційна назва JS?');

if (nameJS == 'EcmaScript'){
    alert('Правильно')
}
else {
    alert('Не знаєте? EcmaScript!!')
}*/

/*var age = prompt('скільки вам років?');

var massage = (age < 5) ? 'Привіт малюк!':
(age < 18) ? 'Привіт':
(age < 50) ? 'Здравствуйте':
'Дуже не звичний вік';
document.write(massage);
*/

// alert('Hello');
// var userName = prompt('Enter your name', '');
// document.write('Hello '+ userName);

// var year = prompt('Який зараз рік?', 'введіть рік');

// if (year != 2017){
//     year = 'А от ні ви не вгадали'
// }

// document.write(year);

// var year = prompt('Який зараз рік?');

//   if (year == 2017) {
//     alert('Ви знаток зараз дійсно '+ year);
// }
//   else {
//     alert('А от і ні!');
// }
    
/*var myYears = prompt('В якому році я народився?');

if (myYears < 1991) {
    alert('Це ранувато');
}
else if (myYears > 1991) {
    alert('Це забагато');
}
else {
    alert('вірно. я народився '+myYears);
}*/

