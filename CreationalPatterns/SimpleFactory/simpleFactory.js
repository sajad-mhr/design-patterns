// تعریف کلاس‌های مختلف پرداخت
class CreditCardPayment {
    processPayment(amount) {
        console.log(`Processing credit card payment of ${amount} dollars`);
    }
}

class PayPalPayment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of ${amount} dollars`);
    }
}

class BitcoinPayment {
    processPayment(amount) {
        console.log(`Processing Bitcoin payment of ${amount} dollars`);
    }
}

// تعریف Simple Factory با استفاده از شیء نگاشت
class PaymentFactory {
    static paymentTypes = {
        creditcard: CreditCardPayment,
        paypal: PayPalPayment,
        bitcoin: BitcoinPayment,
    };

    static createPayment(type) {
        const PaymentClass = this.paymentTypes[type];
        if (!PaymentClass) {
            throw new Error('Invalid payment type');
        }
        return new PaymentClass();
    }
}

// استفاده از Simple Factory برای ایجاد اشیاء پرداخت
const paymentType = 'bitcoin';
const payment = PaymentFactory.createPayment(paymentType);
payment.processPayment(100);
