// class Singleton {
//     constructor() {
//         if (!Singleton.instance) {
//             this.value = Math.random();
//             Singleton.instance = this;
//         }
//         return Singleton.instance;
//     }

//     getValue() {
//         return this.value;
//     }
// }

// const instance1 = new Singleton();
// const instance2 = new Singleton();

// console.log(instance1.getValue()); // همان مقدار instance1
// console.log(instance2.getValue()); // همان مقدار instance2


// Singleton.js
// let instance = null;

// class Singleton {
//     constructor() {
//         if (!instance) {
//             this.value = Math.random();
//             instance = this;
//         }
//         return instance;
//     }

//     getValue() {
//         return this.value;
//     }
// }

// const getInstance = () => {
//     if (!instance) {
//         instance = new Singleton();
//     }
//     return instance;
// }

// const instance1 = getInstance();
// const instance2 = getInstance();

// console.log(instance1 === instance2); // true
// console.log(instance1.getValue()); // همان مقدار instance1
// console.log(instance2.getValue()); // همان مقدار instance2


// مثال استفاده ار سینگلتون در اتصال به دیتابیس


// Database.js
const mongoose = require('mongoose');

let instance = null;

class Database {
    constructor() {
        if (!instance) {
            this._connect();
            instance = this;
        }
        return instance;
    }

    _connect() {
        mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Database connection successful');
        })
        .catch(err => {
            console.error('Database connection error:', err);
        });
    }
}

const getInstance = () => {
    if (!instance) {
        instance = new Database();
    }
    return instance;
}

module.exports = getInstance;




// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;



// main.js
const getDatabaseInstance = require('./Database');
const User = require('./models/User');

// اطمینان از اتصال به دیتابیس
getDatabaseInstance();

// ایجاد یک کاربر جدید
const newUser = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
});

// ذخیره کاربر در دیتابیس
newUser.save()
    .then(() => {
        console.log('User saved successfully');
    })
    .catch(err => {
        console.error('Error saving user:', err);
    });

