const math = require("mathjs");
const fs = require("fs");

// STEP 1

// study hrs and sleep hrs
const X = [
  [1, 6],
  [2, 2],
  [3, 1],
  [4, 5],
  [5, 7],
];

const Y = [60, 55, 50, 70, 85];
const XwithIntercept = X.map((x) => [1, ...x]);

// console.log('X with intercept:', XwithIntercept);

// STEP 2

// Transpose X with intercept
const XMatrix = math.matrix(XwithIntercept);
const Xtransposed = math.transpose(XwithIntercept);

const YMatrix = math.matrix(Y).resize([5, 1]);
// By Default it will give me 1 row and 5 columns, to resize it to 5 rows and 1 column, use .resize([5,1])

// console.log("Y Matrix:", YMatrix);

// console.log(XMatrix)
// console.log(Xtransposed)

// XMatrix multiply by Xtransposed

// xTx
const XtransposedX = math.multiply(Xtransposed, XMatrix);
// console.log('X transposed * X:', XtransposedX);

// xTy
const XtransposedY = math.multiply(Xtransposed, YMatrix);
// console.log("X transposed * Y:", XtransposedY);

// STEP 3

// In here we can take directly inervse but in paper its have very long formula
const inserverseXtransposedX = math.inv(XtransposedX);
// console.log("Inverse of X transposed * X:", inserverseXtransposedX);

const beta = math.multiply(inserverseXtransposedX, XtransposedY);
// console.log("Beta:", beta);
// NOW FORMULA IS
// y =  B0 + b1x1 + b2x2
// B0 is the intercept, b1 is the coefficient for study hours, and b2 is the coefficient for sleep hours
// beta[0] is B0, beta[1] is b1, and beta[2] is b2

const coefficients = beta.toArray().map((row) => row[0].toFixed(2));
// console.log("Coefficients:", coefficients);

fs.writeFileSync(
  "./public/mr-example-coefficients.json",
  JSON.stringify({ coefficients }, null, 2),
  (err) => {
    if (err) {
      console.error("Error writing coefficients to file:", err);
    } else {
      console.log("Coefficients written to file successfully.");
    }
  }
);
