let array = [6, 6, 6, 8];
let similarElements;
for (let i = 1; i < array.length; i++) {
  if (array[0] === array[i]) {
  similarElements = true
  }
  else {
   similarElements = false;
   i = array.length;
}
}
console.log(`${similarElements}`)