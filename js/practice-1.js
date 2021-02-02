// const findLongestWord = function (string) {
//     string = string.split(' ');
//     let longestWord = string[0];
//     for (let i = 0; i < string.length; i += i) {
//         if (string[i].length > longestWord.length) {
//            longestWord = string[i]
//        }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('May the force be with you'));


const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

// поиск друга;

/* const findFriendByname = function(allFriends, nameToFind){
for (const friend of allFriends) {
    console.log(friend);
    if (friend.name === nameToFind) {
        return 'Друг найден';}
    }
    return 'Друг не найден';
}
console.log(findFriendByname(friends, 'Poly')); */


// поиск друга online;
const getFriendsOnline = function (allFriends) {
    const friendsOnline = [];
    for (const friend of allFriends) {
        // const isOnline = allFriends.online ? `Друг ${friend.name} в сети` : `Друг ${friend.name} не в сети`;
        if (friend.online)
        {friendsOnline.push(friend.name);};
    }
    return friendsOnline;
}
console.log(getFriendsOnline(friends));
