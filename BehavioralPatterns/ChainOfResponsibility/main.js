class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class CardInfoHandler extends Handler {
    handle(request) {
        if (request.cardInfoValid) {
            console.log("Card information is valid.");
            return super.handle(request);
        } else {
            console.log("Invalid card information.");
            return "Card information is invalid.";
        }
    }
}

class BalanceHandler extends Handler {
    handle(request) {
        if (request.balance >= request.amount) {
            console.log("Sufficient balance.");
            return super.handle(request);
        } else {
            console.log("Insufficient balance.");
            return "Insufficient balance.";
        }
    }
}

class SecurityHandler extends Handler {
    handle(request) {
        if (request.securityCheckPassed) {
            console.log("Security check passed.");
            return super.handle(request);
        } else {
            console.log("Security check failed.");
            return "Security check failed.";
        }
    }
}

// Example usage:
const cardInfoHandler = new CardInfoHandler();
const balanceHandler = new BalanceHandler();
const securityHandler = new SecurityHandler();

cardInfoHandler.setNext(balanceHandler).setNext(securityHandler);

const request = {
    cardInfoValid: true,
    balance: 1000,
    amount: 500,
    securityCheckPassed: true,
};

const result = cardInfoHandler.handle(request);
if (result === null) {
    console.log("Request processed successfully.");
} else {
    console.log("Request failed:", result);
}
