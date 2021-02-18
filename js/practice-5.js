/* homework-04-task-2auto
// * THIS - контекст выполнения*/
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);
  
//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);
  
//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };
  
//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };
  
//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
 
  
//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));

  
//   console.log(inventory.items); // ['Knife', 'Medkit']


/* homework-04-task-7auto на автопроверке */

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
    
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`
  }
  const messages = orders.map((order) => composeMessage.call(order));

;
console.log(messages);




// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };
// const makeSheff = function (name) {
//     const innverVar = 555;
//     const message = 'hello';

//     const makeDish = function (dish) {
//         console.log(message);
//         console.log(innverVar);
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// console.dir(mango);


// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango)