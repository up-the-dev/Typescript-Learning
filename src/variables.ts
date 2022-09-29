console.log("hello typescript")

//variable declaration
let z: number = 10

//function declaration
const x = (z: number) => {
    z = z + 10
    return z
}
x(z)

//conditional statement
if (z === 30) {
    z = 100
}


//playing with variabl
let num1 = 101_102
let num2
num2= 10
num2 = num2 + num1
num2=num2+'asads'
console.log(num2, num1)
