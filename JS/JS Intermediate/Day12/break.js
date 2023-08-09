let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    break;
 }
  text += "The number is " + i + "\n";
}

console.log(text)

// i=0 -> 0<10 -> "the number is 0" -> i=1
// i=1 -> 01<10 -> "the number is 1 " -> i=2
// i=2 -> 2<10 ->"The number is 2" -> i=3
// i=3 -> 3<10 3===3 ->break



// The break statement can also be used to jump out of a loop: