
/*function myFunction() {
  var Zahl=9999/3.145159;
  var Pe=Zahl.toFixed(1);
    document.getElementById("demo").innerHTML =Pe;}*/



/*var zahl=prompt("Gib eine Zahl ein");

   if (zahl < 0 || zahl >10 ) {

      alert("Gib eine andere Zahl ein!");}


    else if (zahl < 10 || zahl > 0) {

      alert("Deine Zahl ist "+ zahl)}*/


var today = new Date();
var hournow = today.getHours();
var greeting;

 if (hournow > 18) {
   greeting = 'Guete Abig!';

 }
 else if (hournow > 12) {greeting='Guete Tag!';

 }
 else if (hournow > 0) {greeting= 'Guete Morgen!'

 }
 else  {greeting='Willkommen!';
 }

 document.write('<p>' + greeting + '</p>');
