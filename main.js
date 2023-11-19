let color = 'green';
console.log(color);
console.log(color);
console.log(color);

color = 'black';
console.log(color);

let age = 21;
const YOB = 2002; 
console.log(age);
console.log(YOB);
//GE GE /**/
let name = 'Ammar';
console.log(typeof age);

let result = 2>3;
console.log(result);
console.log(typeof result);

let message = "Welcoo";
console.log(typeof message);
console.log(message);
console.log(message.length);

let language = "Juvri";
let message2 = `Welcoome 
to
${language}`;
 console.log(message2 + message);
console.log(language[3]);

 let nana;
 console.log(typeof nana);

 let value = 5;
 console.log(typeof value);
 console.log(value * "Hallo")


 let colors = ["red", "green", "blue"];
 console.log(colors);
 console.log([2]);
 colors[1] = "black";
 console.log(colors);
 console.log(colors.length);
 console.log(colors.includes("black"));
 colors.unshift("white");
 console.log(colors);
 colors.shift();
 console.log(colors)
colors.push("gold");
colors.push("silver");
colors.pop();
console.log(Array.isArray(colors));

const values = [[1,2, 3], true, "JavaScript"];
console.log(values[0][1]);

let massage = "Welcome To JavaScript";
let resuult = massage.split(' ');
console.log(resuult);


let massage2 = ["Welcome", "to", "JavaScript"];
let resuult2 = message.joint("@");
console.log(resuult2);


let agee = 21;
if(agee < 18){
    console.log(" Sorry, you're not old enough for this game.");
}else{
console.log("Welcooooo!");
}

let numbaar = 1;
if(numbaar > 0){
    console.log("+");
}else if(numbaar < 0){
    console.log("-");
}else{
    console.log("ZERO");
}



const coloors = ['red', 'green', 'blue'];
let coloorNumber = 25;

switch(coloorNumber){

case 1: 
console.log(colors([0]));
break;

case 2:
console.log(colors[1]);
break;

case 3:
console.log(colors[2]);
break;

case 4:
case 5:
case 6:
console.log("black");
break;

default:
console.log('white');
break;
}

for(let i = 1; i<=50; i++ ){
console.log(i);
}


for(let i = 5; i=0; i-- ){
    console.log(i);
    }



const calors = ["red", "green", "blue"];
for(let i = 0; i=calors.length; i-- ){
console.log(calors[i]);
    }
    
    
const callors = ["red", "green", "blue"];
for(let callor of callors){
    console.log(callor);
        }

const messenger = "Welcome to JavaS";
for (let character of messenger){
    console.log(character);
        }

const calllors = ["red", "green", "blue"];
let i = 0;
while(i< calllors.length){
    console.log(calllors[i]);
    i++;
}


const messenggger = "Welcome to JavaS";
let j = 5;
do{
    console.log(messenggger);
    j++
}while(i<5);
console.log('***');

const numaro = [1, 2, 3, 4, 5];
for(let i = 0; i< numaro.length; i++){
    if(numaro[i] == 0){
        break;
    }
    console.log(numaro[i]);
}

const numarro = [1, 2, 3, 4, 5];
for(let i = 0; i< numarro.length; i++){
    if(numarro[i] == 0){
        continue;
    }
    console.log(numarro[i]);
}

function PrintNumbers(){
    console.log(1);
    console.log(2);
    console.log(3);
}
PrintNumbers();

function PrintNumberss(to){
    for(let i=1; i<= to; i++)
    console.log(i);
}
PrintNumberss();

function add(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
add("Welcome to ", "JavaScript");
add(5, 3);

function add(ffirstNumber, ssecondNumber){
let valve = ffirstNumber + ssecondNumber;
return valve;
}

let valve = add(2, 7) - add(2, 3);
console.log(valve);
