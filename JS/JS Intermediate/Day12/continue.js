let text = "";
for (let i = 0; i < 20; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "\n";
}

console.log(text)

// i=0 -> 0<10 -> "The number is 0" -> i=1
// i=1 -> 1<10 -> "the number is 1" -> i=2
// i=2 -> 2<10 -> "the number is 2" -> i=3
// i=3 -> 3<10 i===3 ->continue  i=4
// i=4 -> 4<10 ->"the number is 4" -> i=5
// i=9 -> 9<10 -> "the number is 9" -> i=10
// i=10 -> 10<10 false ->out of the loop