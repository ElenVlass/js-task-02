/* Module 6 */
/* 2.6 */
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     numbers.forEach(number => {if(number > value) filteredNumbers.push(number)});
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));

/* 3.6 */
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
// firstArray.forEach(number => {if (secondArray.includes(number)) commonElements.push(number)})
//   return commonElements;
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

/* 9.6 */
// function changeEven(numbers, value) {
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {newArray.push(number + value)} 
//     else {newArray.push(number)}; })
//    return newArray;
// }
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


/* 20.6 */
const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39
    }
  ];
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName))
//  };
//  console.log(getUsersWithFriend(users, 'Goldie Gentry'));

 /* 21.6
 Дополни функцию getFriends(users) так, чтобы она возвращала 
 массив друзей всех пользователей (свойство friends). 
 У нескольких пользователей могут быть одинаковые друзья,
сделай так чтобы возвращаемый массив не содержал повторений.
  */
 const allFriends = users.flatMap(user => user.friends);
 const getFriends = (users) => {
   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index); 
};
/* в одну строку*/
// const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index); 
 
// console.log(getFriends(users));

/*23.6*/
const getInactiveUsers = (users) => {
    return users.filter(({isActive}) => !isActive)
 };
//  console.log(getInactiveUsers(users));

 /* 43.6*/
 /*Чтобы функция возвращала массив уникальных имён друзей, отсортированный по алфавиту .*/
 const getSortedFriends = users => {
   return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b))
};
// console.log(getSortedFriends(users));

/*44.6*/
/*
Чтобы функция возвращала общий баланс пользователей, пол которых значение параметра gender.
*/
const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.balance).reduce((acc, number) => acc + number, 0)
};
console.table(getTotalBalanceByGender(users, 'male'));
const flo = getTotalBalanceByGender(users, 'male')