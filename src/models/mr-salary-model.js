const { readCSV } = require("./utils");
const seedRandom = require("seedrandom");
const MLR = require("ml-regression-multivariate-linear");
const fs = require("fs");

const splitData = (data, testSize = 0.3, seed = "Something") => {
  const rng = seedRandom(seed);

  // shuffle data by using sort
  // const shuffledData = data.sort(() => Math.random() - 0.5); // getting randome values everything with math.random() thats why we are using seedrandom
  const shuffledData = data.sort(() => rng - 0.5);

  const testCount = Math.floor(data?.length * testSize);
  const trainCount = data?.length - testCount;

  const trainData = shuffledData.slice(0, trainCount);
  const testData = shuffledData.slice(trainCount);

  return { trainData, testData };
};

const computeR2 = (testOutputs, predictions) => {
  // console.log(testOutputs);
  // console.log(predictions);

  const yMean =
    testOutputs.reduce((sum, val) => sum + val, 0) / testOutputs.length;
  // console.log(YMean);
  const ssRes = testOutputs.reduce(
    (sum, output, i) => sum + Math.pow(output - predictions[i], 2),
    0
  );

  const ssTot = testOutputs.reduce(
    (sum, output) => sum + Math.pow(output - yMean, 2),
    0
  );

  return 1 - ssRes / ssTot;
};

async function computeModel(path) {
  const data = await readCSV(path, ["age", "experience", "income"]);
  const { trainData, testData } = splitData(data);

  const trainInputs = trainData.map((row) => [row[0], row[1]]);
  const trainOutputs = trainData.map((row) => [row[2]]);

  // console.log("Training data inputs:", trainInputs);
  // console.log("Train Outputs:", trainOutputs);

  const regression = new MLR(trainInputs, trainOutputs, { intercept: true });
  // in this we will have the weights means model --- B1 B2 B3
  // console.log("Regression Coefficients:", regression);

  const weights = regression.weights.flatMap((x) => x);
  // console.log(weights);

  const testInputs = testData?.map((x) => [x[0], x[1]]);
  const testOutputs = testData?.map((x) => [x[2]]);

  const predictions = regression.predict(testInputs);
  // console.log(predictions);
  // console.log("-------REAL OUTPUT--------");
  // console.log(testOutputs);

  const r2 = computeR2(
    testOutputs.flatMap((x) => x),
    predictions.flatMap((x) => x)
  );

  console.log(r2);
  const jsonData = JSON.stringify(
    {
      intercept: weights[weights.length - 1],
      slopes: weights?.slice(0, weights.length - 1),
      r2,
      trainData: trainData.map((data) => ({
        age: data[0],
        experience: data[1],
        income: data[2],
      })),
      testData: testData.map((data) => ({
        age: data[0],
        experience: data[1],
        income: data[2],
      })),
      predictions: testData.map((data, i) => ({
        age: data[0],
        experience: data[1],
        income: predictions[i],
      })),
    },
    null,
    2
  );

  fs.writeFile("./public/salaryCofficients.json", jsonData, (err) => {
    if (err) {
      console.log("Error while writing file", err);
    } else {
      console.log("Coefficients has been saved!");
    }
  });
}

computeModel("./public/age_exp_salary_dataset.csv");
