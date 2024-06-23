function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const me = new Person("Tyrone", "Jones");
  
  console.table(me);