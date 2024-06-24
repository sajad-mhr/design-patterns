let productTable = [];

class Product {
  constructor(title, price, category) {
    this.title = title;
    this.price = price;
    this.category = category;
  }

  addProduct() {
    productTable.push(this);
  }

  clone() {
    return new Product(this.name, this.price, this.category);
  }
}

let originalProduct = new Product("pixel 8 pro", 2000, "mobile");
originalProduct.addProduct();

let clonedProduct1 = originalProduct.clone();
clonedProduct1.title = "iphone";
clonedProduct1.price = 999;
clonedProduct1.category = "mobile";
clonedProduct1.addProduct();

let clonedProduct2 = originalProduct.clone();
clonedProduct2.title = "POCO X3 NFC";
clonedProduct2.price = 690;
clonedProduct2.category = "mobile";
clonedProduct2.addProduct();

productTable.forEach((p) => {
  console.log(p);
});
