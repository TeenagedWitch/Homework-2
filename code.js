// Task 1.
function makeObjectDeepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = makeObjectDeepCopy(obj[key]);
    }
  }

  return copy;
}

// // Task 2.

const selectFromInterval = (arr, num1, num2) => {
  if (
    !Array.isArray(arr) ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    throw new Error(
      "Wrong arguments, function recieves array, number and number!"
    );
  }

  arr.forEach((element) => {
    if (typeof element !== "number" || isNaN(element)) {
      throw new Error("Array should only include numbers!");
    }
  });

  let startInterval;
  let endInterval;

  if (num1 < num2) {
    startInterval = num1;
    endInterval = num2;
  } else {
    startInterval = num2;
    endInterval = num1;
  }

  const filteredArr = arr.filter(
    (element) => element >= startInterval && element <= endInterval
  );

  return filteredArr.sort((a, b) => a - b);
};

// Task 3.
const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]: function () {
    if (
      typeof this.from !== "number" ||
      typeof this.to !== "number" ||
      this.to < this.from
    ) {
      throw new Error("Invalid range of numbers, or variables!");
    }

    let current = this.from;

    return {
      next: () => {
        if (current <= this.to) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
