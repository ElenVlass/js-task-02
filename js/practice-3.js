/*  homework-03-task-2 */
// const countProps = function (obj) {
// const props = Object.values(obj);
// let sum = 0;
// for (let i = 1; i <= props.length; i +=1) {
// sum = i;
// }
// return sum;
// }
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

/* homework-03-task-3 */

const findBestEmployee = function(employees) {
const amountOfTasks = Object.values(employees);
const employeeName = Object.keys(employees);
let biggestAmount = amountOfTasks[0];
let indexOfWinner = 0;
for (let i=0; i< amountOfTasks.length; i += 1) {
    if (amountOfTasks[i] >  biggestAmount){
        biggestAmount = amountOfTasks[i];
        indexOfWinner = i;
}
}
return employeeName[indexOfWinner];
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

