// زیرسیستم‌ها (Subsystems)

class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }

  validateAccount() {
    console.log(`Validating bank account ${this.accountNumber}`);
    return true;
  }

  deduct(amount) {
    console.log(`Deducting $${amount} from account ${this.accountNumber}`);
  }
}

class CreditCard {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  validateCard() {
    console.log(`Validating credit card ${this.cardNumber}`);
    return true;
  }

  charge(amount) {
    console.log(`Charging $${amount} to credit card ${this.cardNumber}`);
  }
}

class Paypal {
  constructor(email) {
    this.email = email;
  }

  validateAccount() {
    console.log(`Validating PayPal account ${this.email}`);
    return true;
  }

  transfer(amount) {
    console.log(`Transferring $${amount} from PayPal account ${this.email}`);
  }
}

// کلاس‌های استراتژی (Strategy Classes)

class BankPaymentStrategy {
  constructor(details) {
    this.bankAccount = new BankAccount(details.accountNumber);
  }

  pay(amount) {
    if (this.bankAccount.validateAccount()) {
      this.bankAccount.deduct(amount);
    }
  }
}

class CreditCardPaymentStrategy {
  constructor(details) {
    this.creditCard = new CreditCard(details.cardNumber);
  }

  pay(amount) {
    if (this.creditCard.validateCard()) {
      this.creditCard.charge(amount);
    }
  }
}

class PaypalPaymentStrategy {
  constructor(details) {
    this.paypal = new Paypal(details.email);
  }

  pay(amount) {
    if (this.paypal.validateAccount()) {
      this.paypal.transfer(amount);
    }
  }
}

// کلاس Facade

class PaymentFacade {
  constructor(strategy) {
    this.strategy = strategy;
  }

  makePayment(amount) {
    this.strategy.pay(amount);
  }
}

// استفاده از Facade

const bankPayment = new PaymentFacade(
  new BankPaymentStrategy({ accountNumber: "12345678" })
);
bankPayment.makePayment(100);

const creditPayment = new PaymentFacade(
  new CreditCardPaymentStrategy({ cardNumber: "987654321" })
);
creditPayment.makePayment(200);

const paypalPayment = new PaymentFacade(
  new PaypalPaymentStrategy({ email: "example@example.com" })
);
paypalPayment.makePayment(150);
