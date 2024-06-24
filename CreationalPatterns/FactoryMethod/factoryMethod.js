// Product Class
class Order {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return `${this.name} (${this.type}) costs ${this.price} USD.`;
    }
}

// Concrete Product Classes
class FoodOrder extends Order {
    constructor(name, price) {
        super('Food', name, price);
    }
}

class DrinkOrder extends Order {
    constructor(name, price) {
        super('Drink', name, price);
    }
}

// Creator Class
class OrderFactory {
    constructor() {
        this.orderTypes = new Map();
    }

    registerOrder(type, classRef) {
        this.orderTypes.set(type, classRef);
    }

    createOrder(type, name, price) {
        const OrderClass = this.orderTypes.get(type);
        if (!OrderClass) {
            throw new Error('Invalid order type');
        }
        return new OrderClass(name, price);
    }
}

// Client Code
const factory = new OrderFactory();
factory.registerOrder('food', FoodOrder);
factory.registerOrder('drink', DrinkOrder);

try {
    const pizzaOrder = factory.createOrder('food', 'Pizza', 12.99);
    console.log(pizzaOrder.getDescription()); // Pizza (Food) costs 12.99 USD.

    const coffeeOrder = factory.createOrder('drink', 'Coffee', 2.99);
    console.log(coffeeOrder.getDescription()); // Coffee (Drink) costs 2.99 USD.

    // Attempting to create an invalid order
    const invalidOrder = factory.createOrder('dessert', 'Cake', 5.99); // Throws an error
    console.log(invalidOrder.getDescription());
} catch (error) {
    console.error(error.message); // Invalid order type
}
