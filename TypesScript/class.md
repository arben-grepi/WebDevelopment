# Classes in TypeScript

Classes are a fundamental feature in TypeScript (and JavaScript) that provide a blueprint for creating objects with shared properties and methods. TypeScript enhances classes by adding static types, making the code more robust and maintainable.

## Basic Syntax

A class in TypeScript is defined using the `class` keyword. Here's a simple example:

typescript
class Person {
name: string;
age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

const person = new Person('John', 30);
person.greet(); // Output: Hello, my name is John and I am 30 years old.

# Access Modifiers

TypeScript supports three access modifiers: public, private, and protected.

public: Default modifier. Properties and methods are accessible from anywhere.
private: Properties and methods are accessible only within the class.
protected: Properties and methods are accessible within the class and subclasses.

class Person {
public name: string;
private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    private getAge() {
        return this.age;
    }

}

Inheritance
Classes can inherit from other classes using the extends keyword. This allows you to create a hierarchy of classes and reuse code.

class Employee extends Person {
employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    public getEmployeeId() {
        return this.employeeId;
    }

}

const employee = new Employee('Alice', 25, 1234);
employee.greet(); // Output: Hello, my name is Alice
console.log(employee.getEmployeeId()); // Output: 1234

Abstract Classes
Abstract classes are classes that cannot be instantiated directly. They are meant to be subclassed and can contain abstract methods that must be implemented by subclasses.

abstract class Animal {
abstract makeSound(): void;

    move() {
        console.log('Moving...');
    }

}

class Dog extends Animal {
makeSound() {
console.log('Bark');
}
}

const dog = new Dog();
dog.makeSound(); // Output: Bark
dog.move(); // Output: Moving...

Interfaces with Classes
Interfaces can be used to define the structure that a class must follow. A class can implement multiple interfaces.

interface PersonInterface {
name: string;
age: number;
greet(): void;
}

class Person implements PersonInterface {
name: string;
age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

When to Use Classes
Classes are particularly useful in the following scenarios:

Object-Oriented Programming (OOP): When you want to apply OOP principles such as encapsulation, inheritance, and polymorphism.
Code Reusability: When you have a base class with common functionality that can be extended by subclasses.
Complex Objects: When dealing with complex objects that have multiple properties and methods.
State Management: When an object needs to maintain and manage internal state over its lifecycle.
Type Safety: When you want to leverage TypeScript's static typing to ensure type safety and reduce runtime errors.

Conclusion
Classes in TypeScript provide a powerful and flexible way to create objects and manage code in an object-oriented fashion. They enhance JavaScript classes with static typing, access modifiers, and other features, making your code more robust and maintainable. Use classes when you need to represent complex objects, apply OOP principles, or ensure type safety in your applications.
