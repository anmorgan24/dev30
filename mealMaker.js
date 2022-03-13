// Meal Maker

var menu = {};

menu['courses'] = {};

menu['courses']['appetizers'] = [];

menu['courses']['mains'] = [];

menu['courses']['desserts'] = [];

menu.addDishToCourse = function (courseName, dishName, dishPrice) {
    var dish = {
        name: dishName,
        price: dishPrice
    };
    menu['courses'][courseName].push(dish);
};

menu.getRandomDishFromCourse = function (courseName) {
    let dishes = menu['courses'][courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
};

menu.addDishToCourse('appetizers', 'bruschetta', 9);
menu.addDishToCourse('appetizers', 'calamari', 12);
menu.addDishToCourse('appetizers', 'egg rolls', 8);

menu.addDishToCourse('mains', 'sushi', 18);
menu.addDishToCourse('mains', 'chicken parmesan', 16);
menu.addDishToCourse('mains', 'Pad Thai', 14);

menu.addDishToCourse('desserts', 'ice cream', 6);
menu.addDishToCourse('desserts', 'cake', 8);
menu.addDishToCourse('desserts', 'brownie', 9);

menu.generateRandomMeal = function () {
    let appetizer = menu.getRandomDishFromCourse('appetizers');
    let main = menu.getRandomDishFromCourse('mains');
    let dessert = menu.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    console.log(`Tonight you will be starting off with ${appetizer.name}, followed by ${main.name} as your main course, and finishing off with ${dessert.name}. The total price will be $${totalPrice}.`);
};

menu.generateRandomMeal();