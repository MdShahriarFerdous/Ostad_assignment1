/**
 * Write a program that generates a multiplication table for a given number using a for loop.
 */

function multiplicationTable(num) {
	for (let iteration = 1; iteration <= 10; iteration++) {
		let product = iteration * num;
		//Log the product to the console in the format "num x iteration = product"
		console.log(`${num} X ${iteration} = ${product} `);
	}
}
multiplicationTable(3);
