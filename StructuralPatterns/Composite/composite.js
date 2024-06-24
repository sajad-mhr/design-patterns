// Component
class Employee {
  getDetails() {
    throw new Error("This method should be overridden!");
  }
}

// Leaf
class Developer extends Employee {
  constructor(name, position) {
    super();
    this.name = name;
    this.position = position;
  }

  getDetails() {
    return `${this.position}: ${this.name}`;
  }
}

// Leaf
class Designer extends Employee {
  constructor(name, position) {
    super();
    this.name = name;
    this.position = position;
  }

  getDetails() {
    return `${this.position}: ${this.name}`;
  }
}

// Composite
class Team extends Employee {
  constructor(teamName) {
    super();
    this.teamName = teamName;
    this.subordinates = [];
  }

  add(employee) {
    this.subordinates.push(employee);
  }

  remove(employee) {
    const index = this.subordinates.indexOf(employee);
    if (index !== -1) {
      this.subordinates.splice(index, 1);
    }
  }

  getDetails() {
    let details = `Team: ${this.teamName}\n`;
    for (const subordinate of this.subordinates) {
      details += `  - ${subordinate.getDetails()}\n`;
    }
    return details.trim();
  }
}

// Usage
const dev1 = new Developer("Alice", "Senior Developer");
const dev2 = new Developer("Bob", "Junior Developer");
const uiux = new Designer("Charlie", "UX Designer");
const graphicDesigner = new Designer("reza", "Graphic Designer");

const team = new Team("Aylero");
team.add(dev1);
team.add(dev2);
team.add(uiux);
team.add(graphicDesigner);

console.log(team.getDetails());

// مثال دوم

// class Product {
//   getDetails() {}
// }

// class Book extends Product {
//   constructor(title, price) {
//     super()
//     this.title = title;
//     this.price = price;
//   }

//   getDetails() {
//     return `Title: ${this.title} Price: ${this.price}`
//   }
// }

// class Clothing extends Product {
//   constructor(title, price) {
//     super()
//     this.title = title;
//     this.price = price;
//   }

//   getDetails() {
//     return `Title: ${this.title} Price: ${this.price}`
//   }
// }

// class Category extends Product{
//     constructor(title){
//         super()
//         this.title = title;
//         this.products = [];
//     }

//     add(product){
//         this.products.push(product);
//     }

//     getDetails(){
//         let details = `Category: ${this.title}\n`;
//         for (const product of this.products) {
//             details += `  - ${product.getDetails()}\n`;
//         }
//         return details.trim();
//     }
// }

// let bookCategory = new Category('Book');
// bookCategory.add(new Book('mamad',9.2));
// bookCategory.add(new Book('ali',7));

// let clothingCategory = new Category('Clothing');
// clothingCategory.add(new Clothing('T-Shirt',10));

// console.log(bookCategory.getDetails());
// console.log(clothingCategory.getDetails());
