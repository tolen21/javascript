//0 задание
let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// 1 задание
let hello;

// 2 задание
 let gala=['Galymzhan','Tolendiev',17];

// 3 задание
console.log('4>5',4>5, 5)

// 4 задание
console.log(gala[gala.length - 1]);

// 5 задание
gala.push("Kairatuly")
console.log(gala)

// 6 задание
console.log(gala[gala.length - 1]);

// 7 задание
const shyndyk = true;

// 8 задание
if  (shyndyk == true){
     console.log('Shyndyk');
    }
else {
    console.log('Otrik');
}

// 9 задание
let names =['Galymzhan','Dias','Daulet','Omar','Serik'];

// 10 задание
function searchName(name){
        names.forEach(md => {
            if (md == name){
                console.log(names);
            } else{
                console.log('error')
            }
        })}
        searchName('Dias');

//11 задание
let myDream = 'Хочу стать достоиным человеком';
console.log(myDream);

//12 задание
myDream = myDream.split(" ").join("");

console.log(myDream.length);

//13 задание
for (let i = 0; i < 1000; i++) {
    if ((3 ** i) && (3 ** i) < 1000) {
       console.log(3 ** i)
    } else {
       break
    }
 }
 
//14 задание
let center = [5,6]
let number = 4
let number1 = 4/2
let a = [center[0]-number1,center[1]+number1]
let b = [center[0]+number1,center[1]+number1]
let c = [center[0]+number1,center[1]-number1]
let d = [center[0]-number1,center[1]-number1]
console.log(a,b,c,d)

//15 задание
var arr = [];
var index = 0;

function recursive(istr, curstr, count) {
   count--;
   for (var i = 0; i < istr.length; i++) {
      var str = curstr + istr.charAt(i);
      if (count > 0) {
         recursive(istr, str, count);
      }
      else {
         console.log(str);   
         arr[index++] = str;  
      }
   }
}
function enumerate(str, n) {
   for (var i = 0; i < n; i++) {
      recursive(str, "", i + 1);
   }
}
enumerate("788", 2)
