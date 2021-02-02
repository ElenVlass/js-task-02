/* task 2.5 */
/*Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли зарещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.*/

// const checkForSpam = function (message) {
//     const newMessage = message.toLowerCase().split(' ');
// for (const word of newMessage) { 
//     if (word === 'sale' || word === 'spam') {
//         return true;} }
// return false;}
// 
/* OR */
// const checkForSpam = function (message) {
//     const newMessage = message.toLowerCase().split(' ');
// if (newMessage.includes('sale') || newMessage.includes('spam')) {
//     return true;}
// return false;
// }
// console.log(checkForSpam('Get best sale offers now!'))
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('SPAM How to earn fast money?'));

// /* task 2.6 */
// let input;
// const numbers = [];
// let total = 0;
// while (input !== null) {
//     input = prompt('Enter');
//     if (input !== null) { 
//        let number = Number(input);
//        if (Number.isNaN(number)) {
//            console.log('Було введено не число, попробуйте ще раз');
//     } else {
//   numbers.push(number);  }}}
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// /* task 2.7 */
/*
Є масив logins з логінами користувачів. 
Напиши скрипт додавання логіна в масив logins. 
Логін, який додається повинен:
проходити перевірку на довжину від 4 до 16-ти символів включно
бути унікальним, тобто бути відсутнім в масиві logins
*/

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//     let validLogins = login.split('');
//     let numberOfLetters;
//         for (let i=1; i <= validLogins.length ; i +=1) {
// numberOfLetters = i;}
// // if (numberOfLetters >=4 && numberOfLetters<=16) { console.log('Логін валідний!');
// // return true;}
// // else { console.log('Помилка! Логін повинен бути від 4 до 16 символів');
// // return false;}
//     return numberOfLetters >=4 && numberOfLetters<=16 ? true : false;
// };

// const isLoginUnique = function (allLogins, login) {
//  for (const one of allLogins) {
//      if (one === login) { return false;} 
//  } return true;
// };

// const addLogin = function (allLogins, login) {
// if (isLoginValid(login) === true &&  isLoginUnique(allLogins, login)) {
//     allLogins.push(login);}
//     return allLogins;
// };

// console.log(isLoginValid('Ajax')); // 'Логін успішно доданий!'
// console.log(isLoginValid('robotGoogles')); // 'Такий логін вже використовується!'
// console.log(isLoginValid('Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(isLoginValid('jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

// console.log(isLoginUnique(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(isLoginUnique(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(isLoginUnique(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(isLoginUnique(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'

// console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'