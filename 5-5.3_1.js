const anyValue = prompt ("Введите, пожалуйста, любое значение");
let convertedValue = +anyValue;
let isValue = typeof(convertedValue);
let finalValue = convertedValue % 2;
if (isNaN(convertedValue)) {
  console.log ("Упс, кажется, вы ошиблись")
  }
else if (convertedValue == "0") {
    console.log ("Введите, пожалуйста, любое значение")
  }
else {  
  if (isValue = "number" && finalValue === 0) {
    console.log ("Введенное число четное")
  } 
  else if (isValue = "number") {
    console.log ("Введенное число нечетное")
  }
}