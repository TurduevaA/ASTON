// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):
// 1)
// console.log('1');
// setTimeout(() => console.log('2'), 1);
// let promiseNew = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');

//? 1)решение (1 3 6 4 5 2) 1 ,3 потому что создается новый промис,6, переходим на микротаск 4,после того как микро таски закончились тогда преейдем на макротаски - 5, 2.
//////////////////////////////
// 2)
// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a");
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 0);
//     console.log("3");
// });
//? 2) решение- 1,3,2. создается новый промис 1, потом синх 3, асинх 2
/////////////////////////
// 3)
// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });
// promiseTwo
//     .then((res) => {
//         return res + "b";
//     })
//     .then((res) => {
//         return res + "с";
//     })
//     .finally((res) => {
//         return res + "!!!!!!!";
//     })
//     .catch((res) => {
//         return res + "d";
//     })
//     .then((res) => {
//         console.log(res);
//     });
//? 3)решение -- abc!!!!!!!-- создается новый промис и видим что успешно a потом медоты идут abc метод finally он не от чего не зависит сразу выполняется. catch выполняется когда у нас ошибка но у нас все успешно он игнорируется.
/////////////////////////////
// 4)
// function doSmth() {
//     return Promise.resolve("123");
// }
// doSmth()
//     .then(function (a) {
//         console.log("1", a); //
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b);
//         return Promise.reject("321");
//     })
//     .catch(function (err) {
//         console.log("3", err);
//     })
//     .then(function (c) {
//         console.log("4", c);
//         return c;
//     });
//? 4решение) 1- 123, 2-123,3-321, 4-Undefined потому что .catch(function (err) {console.log("3", err)}) не чего не возвращяется.
///////////////////////////
// 5)
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
//? 5) решение 1,4,3,2
////////////////////////////
//7)
// async function a() {
//   console.log("a");
// }

// console.log("1");

// (async function () {
//   console.log("f1");
//   await a();
//   console.log("f2");
// })();
// console.log("2");
//? 7) решение - 1, 2, f1,a,f2
////////////////////////////////
//8)
// console.log(1);

// setTimeout(() => console.log(2));

// async function func() {
//   console.log(3);

//   await new Promise((resolve) => {
//     console.log(4);
//     resolve();
//     console.log(5);
//   })
//     .then(() => console.log(6))
//     .then(() => console.log(7));

//   console.log(8);
// }

// setTimeout(() => console.log(9));

// func();

// console.log(10);
//?8) решение   1 3 4 5 10 6 7 8  2 9
///////////////////////////////////
// 9)*
// function foo(callback) {
//     setTimeout(() => {
//         callback('A');
//     }, Math.random() * 100);
// }
// function bar(callback) {
//     setTimeout(() => {
//         callback('B');
//     }, Math.random() * 100);
// }
// function baz(callback) {
//     setTimeout(() => {
//         callback('C');
//     }, Math.random() * 100);
// }
//
// foo(console.log)
// bar(console.log)
// baz(console.log)

// Написать функцию, чтобы починить последовательность выполнения A,B,C без использования колбэк хэлла
// в функциях foo, bar,baz запрещено что-либо менять
// подсказка: нужны промисы =))
//?9) решение function fooProm() {
// return new Promise((resolve) => {
//  foo((result) => {
//    resolve(result);
//   });
// });
//}

//function barProm() {
///return new Promise((resolve) => {
//bar((result) => {
//resolve(result);
//});
//});
//}
//function bazProm() {
//return new Promise((resolve) => {
//baz((result) => {
//resolve(result);
//});
//});
//}

//fooProm()
//.then((result) => {
//console.log(result);
//return barProm();
//})
//.then((result) => {
//console.log(result);
//return bazProm();
//})
//.then((result) => {
//console.log(result);
//});

///////////////
// todo Объяснить код, рассказать какие консоли и в какой последовательности будут, а затем переписать его на промисы
// function resolveAfter2Seconds(x) {
//     console.log(`Какой Х пришёл -> ${x}`)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x); //
//         }, 5000);
//     });
// }
// async function add1(x) {
//     console.log('add1 Hello')
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     console.log('add1 Bye')
//     return x + a + b;
// }
// add1(10).then(console.log);
//? 10)решение. У нас есть 2функции первый вызван внутри второго add1. на первом есть таймаут на 5секунд. В консоле сразу выйдет add1 Hello и Какой Х пришёл -> 20. потом после 5секунд  выйдет: Какой Х пришёл -> 30 потом еще через 5секунд выйдет: add1 Bye и 10+20+30=60 выйдет чтобы 20 и 30 сразу вышли можно использовать promise и метод all
//function resolveAfter2Seconds(x) {
//  console.log(`Какой X пришёл -> ${x}`);
//return new Promise((resolve) => {
//setTimeout(() => {
//resolve(x);
//}, 5000);
//});
//}

//function add1(x) {
//console.log("add1 Hello");
//return Promise.all([resolveAfter2Seconds(20), resolveAfter2Seconds(30)])
//.then(([a, b]) => {
//console.log("add1 Bye");
//return x + a + b;
//});
//}

//add1(10).then(console.log);
// если так то через 5 секунд выйдет add1 Bye 60
