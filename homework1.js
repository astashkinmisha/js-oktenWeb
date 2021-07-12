
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let k = 3.14;
// let l = 2.7;
// let m = 16;
// let n = true;
// let o = false;
//
// //     Вивести кожну змінну за допомогою: console.log , document.write
// // console.log(a, b, c, d, e, f, g, h, k, l, m, n, o);
// // document.write(a, b, c, d, e, f, g, h, k, l, m, n, o);
//
// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// a = 'hell';
// b =  'jsx';
// c =  true;
// d =  false;
// e =  12345;
// f =  -123;
// g =  55;
// h =  'hi!';
// k =  'dd';
// l =  '-13';
// m = 44;
// n =  'wooho';
// o = true;
//
//
// //     Вивести кожну змінну за допомогою: console.log , document.write
// console.log(a, b, c, d, e, f, g, h, k, l, m, n, o);
// document.write(a, b, c, d, e, f, g, h, k, l, m, n, o);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

// let firstName = 'Mykhailo';
// let middleName = 'Mykhailovych';
// let lastName = 'Astashkin';
// let person = lastName + ' ' +  firstName + ' ' + middleName;
//
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt();
// let surName = prompt();
// let age = +prompt();
//
// console.log('Вітаю' ,name , surName ,'.', 'Тобі' , age , 'роки');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a, typeof b, typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 = 6 -> false
// 10 === 10 -> true
// 10 = 10 -> true
// 10 !== 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 = '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); --> false
// console.log(34 > 33 && 23 < 90 ); --> true
// console.log(99 > 100 && 45 > 12 ); --> false
// console.log(132 > 100 || 45 < 12 ); --> false
// console.log(111 > 11 || 45 < 111 ); --> true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); --> true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); --> true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); --> false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); --> false
// console.log(!!'-1');  --> true
// console.log(!!-1); --> true
// console.log(!!'0'); --> true
// console.log(!!'null'); --> true
// console.log(!!'undefined'); --> true
// console.log(!!(3/'owu')); --> false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); --> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); --> false
