var firstName = 'Maria';
var anotherName = 1;
var x = true;
function greeting(name) {
    console.log("Ol\u00E1, ".concat(name, "!"));
}
// greeting(anotherName)
greeting(firstName);
