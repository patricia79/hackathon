
// dept. 1
let resultado_back1 = BigInt(Math.pow(2, 250));
console.log(" 2 elevado a 250: ", resultado_back1)
let resultado_back1_String = resultado_back1.toString()

let suma1 = 0

for (let index = 0; index <= resultado_back1_String.length; index++) {
   suma1 = suma1 + Number(resultado_back1_String.charAt(index));
    }
console.log(`La suma de los dígitos es ${suma1}`);

// dept. 2
let resultado_back2 = BigInt(Math.pow(2, 200));
console.log(" 2 elevado a 200: ", resultado_back2)
let resultado_back2_String= resultado_back2.toString()

let suma2 = 0

for (let index = 0; index <= resultado_back2_String.length; index++) {
   suma2 = suma2 + Number(resultado_back2_String.charAt(index));
      
  }
  
  console.log(`La suma de los dígitos es ${suma2}`)

// dept. 3  
let resultado_back3 = BigInt(Math.pow(2, 130));
console.log(" 2 elevado a 130: ", resultado_back3)
let resultado_back3_String = resultado_back3.toString()

let suma3 = 0


for (let index = 0; index <= resultado_back3_String.length; index++) {
   suma3 = suma3 + Number(resultado_back3_String.charAt(index));
    
}
console.log(`La suma de los dígitos es ${suma3}`)



// dept. 4
let resultado_back4 = BigInt(Math.pow(2, 170));
console.log(" 2 elevado a 170: ", resultado_back4)
let resultado_back4_String = resultado_back4.toString()

let suma4 = 0


for (let index = 0; index <= resultado_back4_String.length; index++) {
   suma4 = suma4 + Number(resultado_back4_String.charAt(index));
      
  }
  console.log(`La suma de los dígitos es ${suma4}`)
  

// dept. 5

let resultado_back5 = BigInt(Math.pow(2, 50));
console.log(" 2 elevado a 50: ", resultado_back5)
let resultado_back5_String = resultado_back5.toString()

let suma5= 0

for (let index = 0; index <= resultado_back5_String.length; index++) {
   suma5 = suma5 + Number(resultado_back5_String.charAt(index));
    }
console.log(`La suma de los dígitos es ${suma5}`);

// tots els depts 

let resultado_total = BigInt(Math.pow(2, 800));
console.log(" 2 elevado a 800: ", resultado_total)
let resultado_total_String = resultado_total.toString()

let suma6= 0

for (let index = 0; index <= resultado_total_String.length; index++) {
   suma6 = suma6 + Number(resultado_total_String.charAt(index));
    }
console.log(`La suma de los dígitos es ${suma6}`);



