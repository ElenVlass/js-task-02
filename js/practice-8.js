/*homework-03-task-05*/
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
//   const getAllPropValues = function(arr, prop) {
//     let propArr = [];

// for (const obj of arr) {
// if(obj.hasOwnProperty(prop)){
// propArr.push(obj[prop])
// }}

// return propArr;
//   };
  const getAllPropValues = function (arr, prop) {return  arr.some(a => a[prop]) ? arr.map(a => a[prop]) : [];};
  
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
//   console.log(getAllPropValues(products, 'category')); // []

/*homework-03-task-06*/
const calculateTotalPrice = function(allProducts, productName) {
//    let totalPrice = 0;
//    for(const product of allProducts) {
//    if(product.name === productName) {
// totalPrice += product.price * product.quantity;
//    }}
//     return totalPrice;


return allProducts.find(product => product.name === productName).map(product => product.price * product.quantity);
  };
  
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

/*homework-03-task-07*/

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) { 
        return {
            amount, 
            type,
            id: `${type}-000${amount}`
        }
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        let addTransaction = this.createTransaction(amount, 'deposit');
      this.transactions.push(addTransaction);
  return this.balance += amount;
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        let addTransaction = this.createTransaction(amount, 'withdraw');
this.transactions.push(addTransaction);
if(this.balance >= amount) {
return this.balance -= amount;}
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
    //  for (let i = 0; i < this.transactions.length; i +=1) {
    //      if(this.transactions[i].id === id)
    //      return this.transactions[i];
    //  }
   return this.transactions.find(transaction => transaction.id === id)
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
//         let total = 0;
// for (const obj of this.transactions) {
//     if(obj.type === type) {
// total += obj.amount;
//     }
// }return total;
return this.transactions.filter(transaction => transaction.type === type).reduce((acc, transaction) => acc + transaction.amount, 0)
    },
  };
  console.log(account.createTransaction(566, 'deposit'));
console.log(account.deposit(255));
console.log(account.deposit(100));
console.log(account.deposit(200));
console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails("withdraw-000100"));
console.log(account.getTransactionTotal('deposit'));
// console.log(account.);

