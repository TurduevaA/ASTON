// var result = [];
// for (var i = 0; i < 5; i++) {
//   result[i] = (function (a) {
//     return function () {
//       console.log(a);
//     };
//   })(i);
// }
// result[0](); //0
// result[1](); //1
// result[2](); //2
// result[3](); //3
// result[4](); //4
/////////

// function getGroup() {
//   let students = [];
//   let i = 0;
//   while (i <= 10) {
//     students[i] = (function (a) {
//       return function () {
//         console.log(a);
//       };
//     })(i);
//     i++;
//   }
//   return students;
// }

// let group = getGroup();
// group[0]();
// group[5]();
/////////
// function multiply(x) {
//     let result = x;

//     function innerMultiply(y) {
//       result *= y;
//       return innerMultiply;
//     }

//     innerMultiply.valueOf = function () {
//       return result;
//     };

//     return innerMultiply;
//   }

//   console.log(multiply(2)(3)(4).valueOf()); // 24
//   console.log(multiply(2)(4).valueOf()); // 8
//   console.log(multiply(2)(3)(4)(5).valueOf()); // 120
//   console.log(multiply(5)(2)(3).valueOf()); //30
////////
function getUniqArray(arr) {
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
    throw new Error(
      "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
    );
  }

  return Array.from(new Set(arr));
}

const newArray = [1, 2, 3, 4, 3, 2, 1];
const uniqueArray = getUniqArray(newArray);
console.log(uniqueArray); //  [1, 2, 3, 4]
