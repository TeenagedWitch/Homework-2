// Task 1.
function makeObjectDeepCopy(obj) {
  console.log(obj);
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

const obj1 = {
  name: "Serega",
  passposrt: {
    first: "Georgia",
    second: "Russia",
  },
};

console.log(makeObjectDeepCopy(obj1));

const test1 = [
  { a: 1, b: { c: 2 } },
  { d: 3, e: [4, 5] },
];

console.log(makeObjectDeepCopy(test1));

// Task 2.

const selectFromIntervall = (arr, num1, num2) => {
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

console.log(selectFromIntervall([1, 3, 5], 5, 2));
console.log(selectFromIntervall([-2, -15, 0, 4], -13, -5));

console.log(selectFromIntervall(["aaa"], 2, 3));

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

try {
  for (let item of myIterable) {
    console.log(item);
  }
} catch (error) {
  console.error(error);
}
