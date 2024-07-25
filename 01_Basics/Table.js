function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  const me = new Person("Tyrone", "Jones");
  console.table(me);
  


  array = [ 1,2,3,4,5,5]
  console.table(array);


  const string = "harshita"
  console.table(string)

  // * when we make string as an object it works
  const string2 = new String("harshita")
  console.table(string2)