
//server side.
function add(a) {
var result =
  parseFloat(a.toString().split("").reverse().join("")) * Math.sign(a);
return alert(result);
}
