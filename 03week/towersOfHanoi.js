"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function movePiece(move1, move2) {
	let movedPiece = stacks[move1].pop();
	stacks[move2].push(movedPiece);
}

function isLegal(move1, move2) {
	let movingPiece = stacks[move1].length - 1;
	let bottomPiece = stacks[move2].length - 1;

	if (
		(move1 === "a" || move1 === "b" || move1 === "c") &&
		(move2 === "a" || move2 === "b" || move2 === "c")
	) {
		if (stacks[move2].length == 0) {
			return true;
		} else if (stacks[move2][bottomPiece] > stacks[move1][movingPiece]) {
			return true;
		} else {
			return false;
		}
	} else {
		false;
	}
}

function checkForWin() {
	if (stacks = { a: [], b: [], c: [4, 3, 2, 1] }); {
	return true;
	} 


function towersOfHanoi(startStack, endStack) {
	// Your code here
	if (isLegal(startStack, endStack)) {
		movePiece(startStack, endStack);
	}
	checkForWin();
}

function getPrompt() {
	printStacks();
	rl.question("start stack: ", startStack => {
		rl.question("end stack: ", endStack => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === "function") {
	describe("#towersOfHanoi()", () => {
		it("should be able to move a block", () => {
			towersOfHanoi("a", "b");
			assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
		});
	});

	describe("#isLegal()", () => {
		it("should not allow an illegal move", () => {
			stacks = {
				a: [4, 3, 2],
				b: [1],
				c: []
			};
			assert.equal(isLegal("a", "b"), false);
		});
		it("should allow a legal move", () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: []
			};
			assert.equal(isLegal("a", "c"), true);
		});
	});
	describe("#checkForWin()", () => {
		it("should detect a win", () => {
			stacks = { a: [], b: [], c: [4, 3, 2, 1] };
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});
} else {
	getPrompt();
}