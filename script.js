class Person {
  constructor(name, age) {
    this._name = name; // Use underscore-prefixed properties
    this._age = age;
  }

  get name() {
    return this._name; // Getter for name
  }

  set age(newAge) {
    this._age = newAge; // Setter for age
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
