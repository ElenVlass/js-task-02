/*  homework-05-task-1 */
// const Account = function (login, email) {
// this.login = login;
// this.email = email;
// } 

// Account.prototype.getInfo = function () {
//     console.log(this);
// }

// const poly = new Account ('Poly', 'poly@mail.com');

// const mango = new Account ('Mangozedog', 'mango@dog.woof');

// poly.getInfo();
// mango.getInfo();

/* homework-05-task-2 */

// class User {
    
//     constructor({name,age,followers}) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo() {
// return console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers.`);
//     }

// }
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo(); // User Poly is 3 years old and has 17 followers
  



/*  homework-05-task-3 */

// class Storage {
//     constructor (items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         const indexItem = items.indexOf(item);
//         this.items.splice(indexItem, 1)
// }
// }
// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


/*  homework-05-task-4 */

// class StringBuilder {
//     constructor (str) {
//         this._value = str;
//     }
//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value += str;
//     }
//     prepend(str) {
//         this._value = str + this._value;
//     }
//     pad(str) {
//         this._value = str + this._value + str;
//     }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='



/*  homework-05-task-5 */

class Car {

  constructor({speed = 0, price, maxSpeed, isOn, distance = 0}) {
this.speed = speed;
this._price = price;
this.maxSpeed = maxSpeed;
this.isOn = isOn;
this.distance = distance;
}  
get price(){
    return this._price
}
set price(newPrice) {
    this._price = newPrice;
}

static getSpecs(car) {
        console.log(car);
    }

turnOn() {
this.isOn = true;
}
turnOff() {
    this.isOn = false;
}
accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
        this.speed += value;
    }
}
decelerate(value) {
    if (this.speed - value > 0) {
        this.speed -=value;
    }
}
drive(hours) {
    if (this.thisOn) {
        this.distance = hours * this.speed;
    }
}
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000