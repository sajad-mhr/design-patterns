// Base message class
class Message {
    send(content) {
        return content;
    }
}

// Decorator class
class MessageDecorator {
    constructor(message) {
        this.message = message;
    }
    
    send(content) {
        return this.message.send(content);
    }
}

// Encryption decorator
class EncryptionDecorator extends MessageDecorator {
    send(content) {
        const encryptedContent = this.encrypt(content);
        return super.send(encryptedContent);
    }
    
    encrypt(content) {
        // Simple encryption (for example purposes)
        return `encrypted(${content})`;
    }
}

// Compression decorator
class CompressionDecorator extends MessageDecorator {
    send(content) {
        const compressedContent = this.compress(content);
        return super.send(compressedContent);
    }
    
    compress(content) {
        // Simple compression (for example purposes)
        return `compressed(${content})`;
    }
}

// Logging decorator
class LoggingDecorator extends MessageDecorator {
    send(content) {
        console.log(`Logging message: ${content}`);
        return super.send(content);
    }
}

// Usage
let message = new Message();
message = new EncryptionDecorator(message);
message = new CompressionDecorator(message);
message = new LoggingDecorator(message);

const finalMessage = message.send("Hello, World!");
console.log(finalMessage);
