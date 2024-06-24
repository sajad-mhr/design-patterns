class OldPaymentSystem {
    constructor() {
        this.amount = 0;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    pay() {
        console.log(`Paying $${this.amount} using Old Payment System`);
    }
}


class NewPaymentSystem {
    makePayment(details) {
        console.log(`Paying $${details.amount} using New Payment System`);
    }
}


class PaymentAdapter {
    constructor(newPaymentSystem) {
        this.newPaymentSystem = newPaymentSystem;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    pay() {
        this.newPaymentSystem.makePayment({ amount: this.amount });
    }
}


// استفاده از سیستم پرداخت قدیمی
const oldPayment = new OldPaymentSystem();
oldPayment.setAmount(100);
oldPayment.pay();

// استفاده از سیستم پرداخت جدید با Adapter
const newPaymentSystem = new NewPaymentSystem();
const paymentAdapter = new PaymentAdapter(newPaymentSystem);
paymentAdapter.setAmount(100);
paymentAdapter.pay();



// مثال دوم

class UserAPI {
    getUserData() {
        return { name: "John Doe", age: 30, email: "john.doe@example.com" };
    }
}

class DataProcessor {
    processData(data) {
        console.log(`Processing data for user: ${data.fullName}, email: ${data.email}`);
    }
}

class UserAdapter {
    constructor(userAPI) {
        this.userAPI = userAPI;
    }

    getProcessedUserData() {
        const userData = this.userAPI.getUserData();
        return {
            fullName: userData.name,
            age: userData.age,
            email: userData.email
        };
    }
}

const userAPI = new UserAPI();
const userAdapter = new UserAdapter(userAPI);
const dataProcessor = new DataProcessor();

const processedUserData = userAdapter.getProcessedUserData();
dataProcessor.processData(processedUserData);
