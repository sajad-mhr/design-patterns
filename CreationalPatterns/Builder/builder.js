class Employee {
  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.nationalCode = "";
    this.jobTitle = "";
  }

  showEmployeeInfo() {
    console.log(
     `\n${this.nationalCode}
      \n${this.firstname}
      \n${this.lastname}
      \n${this.jobTitle}
      \n`
    );
  }
}

class EmployeeBuilder {
  constructor() {
    this.employee = new Employee();
  }

  setFirstName(firstname) {
    this.employee.firstname = firstname;
    return this;
  }

  setLastName(lastname) {
    this.employee.lastname = lastname;
    return this;
  }

  setNationalCode(nationalCode) {
    this.employee.nationalCode = nationalCode;
    return this;
  }

  setJobTitle(jobTitle) {
    this.employee.jobTitle = jobTitle;
    return this;
  }

  build() {
    return this.employee;
  }
}

const employees = [
  {
    nationalCode: "0987654321",
    firstname: "reza",
    lastname: "rezaei",
    jobTitle: "office",
  },
  {
    nationalCode: "1234567890",
    firstname: "mamad",
    lastname: "mamadi",
    jobTitle: "programmer",
  },
];

employees.forEach((e) => {
  let employee = new EmployeeBuilder()
    .setFirstName(e.firstname)
    .setLastName(e.lastname)
    .setNationalCode(e.nationalCode)
    .setJobTitle(e.jobTitle)
    .build();

  employee.showEmployeeInfo();
});
