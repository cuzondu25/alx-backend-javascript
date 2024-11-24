#!/usr/bin/env node
/**
 * A program named 1-stdin.js that will be executed through command line
 * .It should display the message Welcome to Holberton School,
 * .what is your name? (followed by a new line)
 * .The user should be able to input their name on a new line
 * .The program should display Your name is: INPUT
 * .When the user ends the program, it should display This important software
 * .is now closing (followed by a new line)
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
