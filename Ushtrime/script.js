function makeSandwich() {
    var magicIngredient = 'aporchuto';

    function make(filling) {
        return magicIngredient + ' ' + filling;
    }
    return [make];

}

const [make] = makeSandwich();
console.log(make('ketchup'));


const calculate = (x, y) => {
    const sum = () => x + y;
    const prod = () => x * y;

    return [sum, prod];
}

const [sum, prod] = calculate(2, 3);
console.log(sum(), prod());


const water = () => {

    var obj = {};

    obj.emri = 'yll';
    obj.id = '123';

    return [obj];
}

const [obj] = water();
console.log(obj.emri);