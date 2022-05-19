//call a elements to HTML
let label1: string = document.getElementById("label1");
let label2: string = document.getElementById("label2");
let btn1 = document.getElementById("btn1");

//insert in HTML
label1.innerHTML = "insert the number tho check";
label2.innerHTML = "insert the number multiple";

//define variables, tipe and your origin
let number1: number = Number(dato1.value);
let number2: number = Number(dato2.value);

// desing the function magic "isMultiple" (checks with a boolean if data1 and data2 are = 0)
//boolean = true SON MULTIPLOS. boolean = false NO SON MULTIPLOS

function isMultiple(number1: number, number2: number): boolean {
  console.log(number1 % number2 == 0); // console.log verify the boolean
  return number1 % number2 == 0; // el return entrega el valor del boolean (true/false) para ser utilizado despues.
}

//button whith call the function
btn1.addEventListener("click", () => {
  let number1: number = Number(dato1.value); //call the dato1 HTML
  let number2: number = Number(dato2.value); //call the dato2 HTML
  if (isMultiple(number1, number2)) {
    // booblean is true
    console.log("the number", number1, "is multiple of", number2);
  } else {
    // boolean is false
    console.log("the number", number1, "is not a multiple of", number2);
  }
});
