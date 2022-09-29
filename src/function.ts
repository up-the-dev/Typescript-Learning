function add(num1: number, num2: number): number {
    return num1 + num2
}
const sub = (num1: number, num2: number = 100): number => {
    return num1 - num2
}
console.log(sub(1,99))