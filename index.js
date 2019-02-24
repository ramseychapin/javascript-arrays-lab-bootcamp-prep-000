var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  var result = kittens.push(name);
  return result;
}

function destructivelyPrependKitten (name) {
  var result = kittens.unshift(name);
  return result;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var result = [...kittens, name];
  return result;
}

function prependKitten(name) {
  var result = [name, ...kittens]
  return result;
}

function removeLastKitten() {

}

function removeFirstKitten() {

}
