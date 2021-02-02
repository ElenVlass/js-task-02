
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};
const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

const mango = makeSheff('Mango');

console.dir(mango);


mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

console.dir(poly);

poly('чай');
poly('омлет');

console.dir(mango)