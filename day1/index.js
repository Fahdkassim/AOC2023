import fs from "fs";

export const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export const reversedNumbers = {
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
};

const partOne = (file) => {
  const input = fs.readFileSync(file, "utf-8").trim().split("\n");
  const values = input.map((value) => {
    let first = value.split("").find((v) => {
      return !Number.isNaN(Number(v));
    });
    let last = value.split("").findLast((v) => {
      return !Number.isNaN(Number(v));
    });
    return Number(first + last);
  });
  let result = values.reduce((a, b) => a + b, 0);
  console.log(result);
};

const partTwo = (file) => {
  const input = fs.readFileSync(file, "utf-8").trim().split("\n");
  const reversedInput = input.map((line) => {
    return line.split("").reverse().join("");
  });
  // Convert the words to numbers left to right
  const pattern = new RegExp(Object.keys(numbers).join("|"), "gi");
  const inputArray = input.map((line) => {
    return line.replace(pattern, (number) => {
      return numbers[number.toLowerCase()];
    });
  });
  console.log(inputArray);
  // Covert the reversed words to numbers left to right
  const reversedPattern = new RegExp(
    Object.keys(reversedNumbers).join("|"),
    "gi"
  );
  const reversedInputArray = reversedInput.map((line) => {
    return line.replace(reversedPattern, (number) => {
      return reversedNumbers[number.toLowerCase()];
    });
  });
  console.log(reversedInputArray);

  //keep only numbers in the input array
  let filteredInputArray = inputArray.map((line) => {
    let first = line.split("").find((v) => {
      return !Number.isNaN(Number(v));
    });
    return Number(first);
  });
  //keep only numbers in the reversed input array
  let filteredReversedInputArray = reversedInputArray.map((line) => {
    let last = line.split("").find((v) => {
      return !Number.isNaN(Number(v));
    });
    return Number(last);
  });

  const combinedArray = filteredInputArray.map((value, index) => {
    return parseInt(
      value.toString() + filteredReversedInputArray[index].toString()
    );
  });
  return combinedArray.reduce((s, v) => s + v);
};

console.log(partTwo("./sample.txt"));
