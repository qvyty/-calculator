// let	num	= 42
// let  firstName = 'Serega'
// const isProgrammer = true

firstName = 'Max'
// isProgrammer = false -->  error

// alert(firstName)
// console.log('Test:', num, firstName)

// console.log()
// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)

// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = 10 * 3 / 5 - 1
// console.log(num3)

// const fullName = firstName + ' Nik'
// console.log(fullName
	
	
	

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
let action = '+'



plusBtn.onclick = function () {
	action = '+'
}
multiplyBtn.onclick = function () {
	action = '*'
}

minusBtn.onclick = function () {
	action = '-'
}
divideBtn.onclick = function () {
	action = '/'
}

function printResult(result){
	if (result < 0) {
		resultElement.style.color = "red"
	}	else	{
		resultElement.style.color = "green"
	}	
		resultElement.textContent = result
}



function computeNumbersWithAction(inp1, inp2, actionSymbol) {
	const num1 = Number(inp1.value)
	const num2 = Number(inp2.value)
	if (actionSymbol == '+') {
		return num1 + num2

	} else if (actionSymbol == '-'){
		return num1 - num2

	} else	if (actionSymbol == '*') {
		return num1 * num2
		
	} else if (actionSymbol == '/') {
		return num1 / num2
	}

	// return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick =  function () {
	const result = computeNumbersWithAction(input1, input2, action)
	printResult(result)
}

