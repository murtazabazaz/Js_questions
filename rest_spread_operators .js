let arr = [1, 23, 34, 554, 433, 222, 123, 2, 12, 1]
// using rest operator to destructure the array..

let [a, , , ...rest] = arr
console.log(a, rest)

// Destructuring objects...

let { x, y, z } = {
    x: 1,
    y: 44,
    z: 7
}

console.log(z)

// Spread operator...
// converting an array into object using spread operator..
const ar = [1, 3, 32, 2, 1, 1]
const obj = { ...ar }
console.log(obj)

// using spread in function ..
let ar1 = [1, 2, 22]
function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(...ar1))

const a1 = "the";
const b1 = "no";
const c1 = {a1, b1}
console.log(c1)

// used in react to chnge key values of an object

const emp = {
    name: "murtaza",
    post: "senior dev",
    salary: 459999
}
console.log({...emp, name: "Murtaza bazaz"})