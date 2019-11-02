/************************************************************
Quick Crash Calculator

This is a quick calculation script
used for recovering via chasing a specific multiplier.

Author: TechTac#8430

For faster checking you can run
calc(betvalue,cashoutvalue); in console.
You would replace betvalue and cashoutvalue
with their respective values that you're wanting calculated.

e.g calc(320,3);
************************************************************/

//Configure these variables to your situation
let baseBet = 50;
let bankRoll = 50000;
let cashOutTarget = 1000;

//Do not configure past this line
function calc(bet, cashOut) {
    let i = bet;
    let x = cashOut;
    let a = bankRoll / i;
    let b = i * x;

    console.log("-----------------------------------------------------------");
    console.log(" Value per bullet: " + i);
    console.log(" Amount of bullets: " + a);
    console.log(" Amount won from bullet if cash out target is hit: " + b);
    console.log("-----------------------------------------------------------");
}

calc(baseBet, cashOutTarget);
