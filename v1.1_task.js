// const obj = {
//   name: "Jhon",
//   country: {
//     name: "Armenia",
//     code: 374,
//   },
// };

// function changeObjectKeysWithValues(obj) {
//   let nestedChangedObj = {};

//   let newObj = {};

//   for (key in obj) {
//     nestedChangedObj = Object.entries(obj[key]).reduce(
//       (accumulator, [key, value]) => ((accumulator[value] = key), accumulator),
//       {}
//     );

//     if (typeof obj[key] !== "object") {
//       newObj[obj[key]] = key;
//     } else {
//       newObj[key] = nestedChangedObj;
//     }
//   }

//   return newObj;
// }

// console.log(changeObjectKeysWithValues(obj));

const obj = {
  name: "Jhon",
  country: {
    name: "Armenia",
    code: 374,
    c: {
      b: 5000000000,
    },
  },
};

function changeObjectKeysWithValues(obj) {
  let nestedChangedObj = {};

  let newObj = {};

  for (key in obj) {
    nestedChangedObj = Object.entries(obj[key]).reduce(
      (accumulator, [key, value]) => ((accumulator[value] = key), accumulator),
      {}
    );

    if (typeof obj[key] !== "object") {
      newObj[obj[key]] = key;
    } else {
      newObj[key] = changeObjectKeysWithValues(obj[key]);
    }
  }

  return newObj;
}

console.log(changeObjectKeysWithValues(obj));
