class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    static createElectricCar(model) {
      return new Car('Tesla', model);
    }
  
    static createGasCar(make, model) {
      return new Car(make, model);
    }
  
    drive() {
      console.log(`Driving a ${this.make} ${this.model}`);
    }
  }
  
  // استفاده از متد استاتیک برای ایجاد یک ماشین برقی
  const electricCar = Car.createElectricCar('Model S');
  electricCar.drive(); // خروجی: Driving a Tesla Model S
  
  // استفاده از متد استاتیک برای ایجاد یک ماشین بنزینی
  const gasCar = Car.createGasCar('Toyota', 'Corolla');
  gasCar.drive(); // خروجی: Driving a Toyota Corolla
  