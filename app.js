class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

// class Person extends AgedPerson {
class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet= function() { ... };
  }


  // greet = () => {
  //   console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.');
  // };


  greet() {
    console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.');
  }
}


/* function Person() {
  this.age = 30;
  this.name = 'Max';
  // this.greet= function() { ... };
}

person.prototype.greet = function () {
  console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.');
};  */



/*  function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.');
  };
}

Person.describe = function () {
  console.log('Creating persons...');
}   */

/*  Person.prototype = {
  printAge() {
    console.log(this.age)
  }
};  */

// Person.prototype.printAge = function () {
//   console.log(this.age)
// }

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// // console.log(person);
// // console.log(person.__proto__ === Person.prototype);
// // console.log(person.__proto__);
// console.log(person.length);

// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// // console.log(p2);
// // console.dir(Object.prototype);
// console.dir(Object.prototype.__proto__);

// const person = new Person();
// const person2 = new Person();
// person.greet();
// // console.log(person.__proto__ === person.__proto__);
// console.log(person);

// const button = document.getElementById('btn');
// // button.addEventListener('click', person.greet);
// button.addEventListener('click', person.greet.bind(person));

const course = {  //new Object()
  title: 'JavaScript- The Complete Guide',
  rating: 5
};

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`)
  }
});

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

console.log(student);

course.printRating();