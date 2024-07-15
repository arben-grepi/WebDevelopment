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

# Object-oriented programming (OOP)

is a programming paradigm that revolves around the concept of "objects", which are instances of classes that encapsulate data (attributes or properties) and behaviors (methods or functions). OOP emphasizes the following key principles:

Encapsulation: Bundling data (attributes) and methods (functions) that operate on the data together in a single unit (object). This hides the internal state and requires interaction with the object through defined interfaces.

Abstraction: Simplifying complex systems by modeling classes based on real-world entities and focusing on essential characteristics while hiding unnecessary details.

Inheritance: Establishing a hierarchical relationship between classes where one class (subclass or derived class) inherits properties and behaviors from another class (superclass or base class). This promotes code reuse and allows for specialization of classes.

Polymorphism: Referring to the ability of objects to be treated as instances of their superclass or as their own subclass. It allows methods to be defined in a superclass and overridden in subclasses, providing flexibility and extensibility in the code.

Example in TypeScript
Here's a brief example of OOP concepts in TypeScript:

// Define a class 'Animal'
class Animal {
// Attributes
protected name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Method
    public makeSound(): void {
        console.log('Generic animal sound');
    }

}

// Inheritance: Dog extends Animal
class Dog extends Animal {
// Additional attribute
private breed: string;

    // Constructor
    constructor(name: string, breed: string) {
        super(name); // Call superclass constructor
        this.breed = breed;
    }

    // Override method
    public makeSound(): void {
        console.log('Woof');
    }

    // Additional method
    public wagTail(): void {
        console.log(`${this.name} is wagging its tail`);
    }

}

// Create instances
let myAnimal = new Animal('Generic Animal');
let myDog = new Dog('Buddy', 'Golden Retriever');

// Access attributes and methods
console.log(myAnimal.name); // Error: 'name' is protected and only accessible within the class or its subclasses
myAnimal.makeSound(); // Output: Generic animal sound

console.log(myDog.name); // Error: 'name' is protected and only accessible within the class or its subclasses
myDog.makeSound(); // Output: Woof
myDog.wagTail(); // Output: Buddy is wagging its tail

In this example:

Animal is a base class with encapsulated name attribute and a method makeSound.
Dog extends Animal, inheriting name and makeSound, while adding a breed attribute and a specialized makeSound method.
Dog demonstrates encapsulation (with name), inheritance (from Animal), and polymorphism (with overridden makeSound).

Benefits of OOP
Modularity: Encapsulation allows objects to be independent modules, enhancing code reusability and maintainability.
Flexibility and Extensibility: Inheritance and polymorphism enable the creation of hierarchies of classes that can be extended and modified easily.
Easier Maintenance: Abstraction simplifies the understanding and modification of complex systems by focusing on essential details.
Scalability: OOP supports building large-scale applications by organizing code into manageable units.
Object-oriented programming is widely used in modern software development due to its ability to model real-world entities effectively and promote modular, reusable, and maintainable code.

# Access Modifiers

Public: Default modifier if none specified. Public properties/methods are accessible from anywhere, both inside and outside the class.

Protected: Protected properties/methods are accessible within the class they are defined in and within subclasses (derived classes) of that class. They are not accessible from outside the class hierarchy.

Private: Private properties/methods are accessible only within the class they are defined in. They are not accessible from outside the class, including subclasses.

Readonly: Readonly properties can only be initialized once (either in the declaration or in the constructor), and their value cannot be changed afterwards.

Examples in TypeScript
Here's how you can use these access modifiers and property types in TypeScript:

class Animal {
public name: string; // Public property

    protected species: string; // Protected property

    private age: number; // Private property

    readonly habitat: string; // Readonly property

    constructor(name: string, species: string, age: number, habitat: string) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.habitat = habitat;
    }

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.species}.`);
        console.log(`I live in ${this.habitat}.`);
        // Accessing protected and private properties within the class
        console.log(`I am ${this.age} years old.`);
    }

}

class Dog extends Animal {
constructor(name: string, age: number, habitat: string) {
super(name, 'Dog', age, habitat);
// Can access protected property in subclass
console.log(`Created a new dog named ${this.name}`);
console.log(`My species is ${this.species}`);
}

    public bark(): void {
        // Can access protected and public properties inherited from Animal
        console.log(`${this.name} says woof!`);
    }

}

let myAnimal = new Animal('Leo', 'Lion', 5, 'Savanna');
myAnimal.introduce(); // Outputs information about the animal

let myDog = new Dog('Buddy', 3, 'Home');
myDog.introduce(); // Outputs information about the dog
myDog.bark(); // Outputs "Buddy says woof!"

Explanation:
Public: name is accessible from outside the class instances (myAnimal.name, myDog.name).
Protected: species is accessible in subclasses like Dog, but not directly from instances (myAnimal.species is not allowed).
Private: age is only accessible within the Animal class, not even in subclasses (myAnimal.age would result in an error).
Readonly: habitat can only be set once (in the constructor) and cannot be modified afterwards (myAnimal.habitat = 'Forest'; would result in an error).

When to Use Each Modifier:
Public: Use when you want the property/method to be accessible from outside the class, such as when interacting with instances of the class.

Protected: Use when you want the property/method to be accessible within the class and its subclasses, useful for inheritance and ensuring certain properties are accessible only to derived classes.

Private: Use when you want the property/method to be accessible only within the class it is defined in, useful for encapsulation and hiding implementation details.

Readonly: Use when you want a property to be initialized once and prevent accidental modification afterwards, ensuring immutability.

# Access Control Keywords

In TypeScript (and in object-oriented programming in general), access control keywords are used to specify the accessibility of class members (properties and methods) from outside the class. TypeScript provides three primary access modifiers:

public: The default access modifier if none is specified. Public members are accessible from outside the class.

protected: Members marked as protected are accessible within the class they are defined in, and they can also be accessed within subclasses (derived classes) of that class.

private: Private members are accessible only within the class they are defined in. They cannot be accessed from outside the class, including subclasses.

Examples in TypeScript
Here's how you can use these access control keywords in TypeScript:

class Animal {
public name: string; // Public member

    protected age: number; // Protected member

    private species: string; // Private member

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.species}.`);
        console.log(`I am ${this.age} years old.`);
    }

    protected changeAge(newAge: number): void {
        this.age = newAge;
        console.log(`Age changed to ${this.age}`);
    }

    private revealSpecies(): void {
        console.log(`My species is ${this.species}`);
    }

}

class Dog extends Animal {
constructor(name: string, age: number) {
super(name, age, 'Dog');
}

    public bark(): void {
        console.log(`${this.name} says woof!`);
        // Can access protected member in subclass
        this.changeAge(5);
    }

}

let myAnimal = new Animal('Leo', 5, 'Lion');
console.log(myAnimal.name); // Accessing public member
myAnimal.introduce(); // Accessing public and protected members

let myDog = new Dog('Buddy', 3);
console.log(myDog.name); // Accessing public member inherited from Animal
myDog.introduce(); // Accessing public and protected members inherited from Animal
myDog.bark(); // Outputs "Buddy says woof!" and changes age to 5

Explanation:
Public: name is accessible outside the class instances (myAnimal.name, myDog.name).

Protected: age is accessible within the Animal class and subclasses like Dog (myAnimal.age is not allowed, but myDog.age is allowed).

Private: species is only accessible within the Animal class (myAnimal.species and myDog.species would result in an error).

When to Use Each Modifier:
Public: Use when you want the property/method to be accessible from outside the class, such as when interacting with instances of the class.

Protected: Use when you want the property/method to be accessible within the class and its subclasses, useful for inheritance and ensuring certain properties are accessible only to derived classes.

Private: Use when you want the property/method to be accessible only within the class it is defined in, useful for encapsulation and hiding implementation details.

These access control keywords help in defining the visibility and accessibility of class members, ensuring proper encapsulation and design in your TypeScript applications.

# Getters and Setters

## Getters

A getter is a method that gets the value of a specific property. It allows you to retrieve the value of a property in a controlled manner, potentially computing it on-the-fly or applying additional logic before returning it.

In TypeScript, getters are defined using the get keyword followed by the property name:

class Circle {
private \_radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    // Getter for radius property
    get radius(): number {
        return this._radius;
    }

    // Method to calculate area of the circle
    get area(): number {
        return Math.PI * this._radius ** 2;
    }

}

let myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
console.log(myCircle.area); // Output: ~78.54

In this example:

radius is a getter method that returns the value of the \_radius property.
area is a getter method that computes and returns the area of the circle based on its radius.
Setters
A setter is a method that sets the value of a specific property. It allows you to control how properties are set, enforcing validation or triggering actions when a property is updated.

In TypeScript, setters are defined using the set keyword followed by the property name:
class Circle {
private \_radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    // Getter for radius property
    get radius(): number {
        return this._radius;
    }

    // Setter for radius property
    set radius(value: number) {
        if (value <= 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }

}

let myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5

// Using the setter
myCircle.radius = 10;
console.log(myCircle.radius); // Output: 10

// Trying to set an invalid radius
try {
myCircle.radius = -1; // Throws an error
} catch (error) {
console.error(error.message); // Output: Radius must be positive
console.log(myCircle.radius); // Output: 10 (radius remains unchanged)
}

In this example:

radius is a setter method that sets the value of the \_radius property after validating that the value is positive.

## Benefits of Getters and Setters

Encapsulation: Getters and setters encapsulate the internal state of an object, allowing controlled access to properties.
Validation: Setters enable validation logic to ensure that properties are set with valid values.
Computed Properties: Getters can compute and return derived properties based on other properties of the object.
Flexibility: Getters and setters provide flexibility in the implementation of properties without breaking existing code that accesses them.

## When to Use Getters and Setters

Use getters when you want to compute or derive a value based on other properties.
Use setters when you want to enforce validation logic or trigger actions when setting a property.
By using getters and setters effectively, you can improve the maintainability, readability, and robustness of your TypeScript classes, adhering to the principles of object-oriented programming.

# Parameter properties

Parameter properties in TypeScript provide a convenient way to declare class properties and initialize them directly within the constructor parameters. This approach combines parameter declaration and property initialization into a single concise syntax.

Syntax
To define parameter properties, you use access modifiers (public, protected, private, or readonly) followed by the parameter name in the constructor parameter list. TypeScript automatically generates the corresponding property and assigns the parameter value to it. Here’s how it looks:

class Person {
constructor(public name: string, private age: number, protected gender: string, readonly id: number) {
// The properties 'name', 'age', 'gender', and 'id' are automatically created and initialized
}

    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, ID: ${this.id}`);
    }

}

let person = new Person('Alice', 30, 'Female', 12345);
person.displayInfo(); // Output: Name: Alice, Age: 30, Gender: Female, ID: 12345

Explanation:
name, age, gender, and id are parameter properties declared in the constructor of the Person class.
TypeScript automatically creates corresponding properties (name, age, gender, id) based on the constructor parameters.
Access modifiers (public, private, protected, readonly) can be used to control the visibility and mutability of these properties.
Benefits of Parameter Properties
Conciseness: Reduces boilerplate code by combining parameter declaration and property initialization into one line.

Readability: Clearly indicates which parameters are used to initialize class properties, improving code readability and maintainability.

Initialization Safety: Ensures that properties are initialized with valid values as soon as the object is created.

Usage Guidelines
Access Modifiers: Choose appropriate access modifiers (public, private, protected, readonly) based on the desired visibility and mutability of properties.

Readonly: Use readonly for properties that should not be modified after initialization.

Validation: You can still perform additional validation or computations within the constructor if needed, even with parameter properties.

Parameter properties are particularly useful when you have class properties that are directly derived from constructor parameters and when you want to reduce the amount of boilerplate code needed to initialize these properties. They align well with TypeScript's goal of providing strong typing and object-oriented programming principles.

# Static members

Static members in TypeScript (and in object-oriented programming in general) belong to the class itself rather than instances of the class. This means there is only one copy of each static member, shared among all instances of the class. Static members are accessed using the class name rather than through instances of the class.

Types of Static Members
Static Properties: Properties declared as static are shared among all instances of the class. They are accessed using the class name followed by the property name.

Static Methods: Methods declared as static belong to the class itself rather than instances. They can be called directly on the class name without creating an instance of the class.

Syntax
To define static members in TypeScript, you use the static keyword before the property or method declaration:

class Circle {
static pi: number = 3.14; // Static property

    constructor(public radius: number) {
        // Constructor to initialize instance properties
    }

    // Instance method to calculate area
    calculateArea(): number {
        return Circle.pi * this.radius ** 2;
    }

    // Static method to calculate circumference
    static calculateCircumference(radius: number): number {
        return 2 * Circle.pi * radius;
    }

}

// Accessing static property
console.log(Circle.pi); // Output: 3.14

let myCircle = new Circle(5);

// Accessing instance method
console.log(myCircle.calculateArea()); // Output: ~78.5

// Calling static method
console.log(Circle.calculateCircumference(5)); // Output: ~31.4

Explanation:
pi is a static property of the Circle class, shared among all instances.
calculateArea is an instance method that calculates the area of a circle based on the instance's radius.
calculateCircumference is a static method that calculates the circumference of a circle based on a given radius, using the static property pi.

Benefits of Static Members
Single Instance: Static members are associated with the class itself rather than instances, ensuring there is only one instance of each static member regardless of how many instances of the class are created.

Utility Methods: Static methods are useful for defining utility functions that are related to the class but do not require instance-specific data.

Constants: Static properties can be used to define constants that are shared across all instances of the class.

Factory Methods: Static methods can be used as factory methods to create instances of the class with specific configurations.

When to Use Static Members
Utility Functions: Use static methods to define utility functions that are related to the class but do not depend on instance-specific data.

Constants: Use static properties for constants that are shared across all instances of the class.

Singleton Pattern: Use static properties and methods to implement singleton patterns where there is only one instance of a class.

Static members provide a way to organize and manage shared data and functionality within a class hierarchy, enhancing code clarity and efficiency in TypeScript applications.

# Method Overriding

Method overriding is a concept in object-oriented programming where a subclass provides a specific implementation of a method that is already defined in its superclass. This allows subclasses to provide their own implementation of a method that is inherited from the superclass, thereby customizing or extending the behavior defined in the superclass.

How Method Overriding Works
Inheritance: Method overriding relies on inheritance, where a subclass inherits methods from its superclass.

Signature Matching: The overriding method in the subclass must have the same name, same parameters (number and type), and same return type as the method in the superclass.

Override Annotation: In TypeScript, you can explicitly indicate that a method is intended to override a method from the superclass using the override keyword (though it's not required for the functionality).

Example in TypeScript
Here’s an example demonstrating method overriding in TypeScript:

class Animal {
makeSound(): void {
console.log('Generic animal sound');
}
}

class Dog extends Animal {
// Override the makeSound method
makeSound(): void {
console.log('Woof');
}
}

class Cat extends Animal {
// Override the makeSound method
makeSound(): void {
console.log('Meow');
}
}

// Creating instances
let myDog = new Dog();
let myCat = new Cat();

// Calling overridden methods
myDog.makeSound(); // Output: Woof
myCat.makeSound(); // Output: Meow

Explanation:
Animal Class: Defines a makeSound method with a generic implementation of animal sound.

Dog Class: Extends Animal and overrides the makeSound method with a specific bark sound (Woof).

Cat Class: Also extends Animal and overrides the makeSound method with a specific meow sound (Meow).

Usage: Instances of Dog and Cat call their respective overridden makeSound methods, which provide specific behaviors based on the subclass.

Benefits of Method Overriding
Polymorphism: Allows different classes to provide their own implementations of methods defined in a common superclass, enhancing flexibility and code reusability.

Customization: Enables subclasses to customize behaviors inherited from their superclass without modifying the superclass itself.

Inheritance: Facilitates the use of inheritance hierarchies to model real-world relationships more accurately.

When to Use Method Overriding
Use method overriding when you want subclasses to provide specific implementations of methods inherited from a superclass, tailored to their own requirements.

It's particularly useful in scenarios where you have a common behavior defined in a superclass, but different subclasses need to exhibit variations of that behavior.

Method overriding is a fundamental concept in object-oriented design, promoting code extensibility, maintainability, and adherence to the principles of inheritance and polymorphism.

# Polymorphism

Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface (method or property) to be used to denote different forms or behaviors, based on the actual runtime type of the object.

Key Aspects of Polymorphism:
Subtyping: Polymorphism is achieved through inheritance and subtype relationships. Subclasses can override methods defined in their superclass, providing specific implementations while adhering to a common interface.

Method Overriding: Subclasses can override methods inherited from their superclass, allowing them to provide specialized behaviors that are appropriate for their specific types.

Dynamic Binding: The method that gets called on an object instance is determined at runtime based on the actual type of the object, rather than the type of the reference variable.

Types of Polymorphism:
Compile-time Polymorphism (Static Binding):

This is achieved using method overloading and operator overloading.
Method overloading allows multiple methods with the same name but different parameters within the same class.
Operator overloading allows operators such as +, -, \* to have different meanings depending on the context.
Runtime Polymorphism (Dynamic Binding):

This is achieved using method overriding.
Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
The actual method that gets executed is determined at runtime based on the type of the object.

Example of Polymorphism in TypeScript:

class Animal {
makeSound(): void {
console.log('Generic animal sound');
}
}

class Dog extends Animal {
makeSound(): void {
console.log('Woof');
}
}

class Cat extends Animal {
makeSound(): void {
console.log('Meow');
}
}

// Function demonstrating polymorphism
function makeAnimalSound(animal: Animal): void {
animal.makeSound();
}

// Creating instances
let myDog = new Dog();
let myCat = new Cat();

// Calling the function with different types of animals
makeAnimalSound(myDog); // Output: Woof
makeAnimalSound(myCat); // Output: Meow

Explanation:
Animal Class: Defines a makeSound method with a generic implementation of animal sound.

Dog and Cat Classes: Extend Animal and override the makeSound method with specific sounds (Woof for Dog and Meow for Cat).

makeAnimalSound Function: Demonstrates polymorphism by accepting an Animal object as a parameter. It calls the makeSound method on the object, and the actual behavior executed depends on the runtime type of the object (Dog or Cat).

Benefits of Polymorphism:
Code Reusability: Allows methods to be defined in a superclass and reused in subclasses with specific implementations, reducing redundancy in code.

Flexibility and Extensibility: Enables software components to be easily extended with new behaviors by adding new subclasses that override existing methods.

Simplification: Provides a clear and consistent interface for interacting with objects, enhancing code readability and maintainability.

Polymorphism plays a crucial role in achieving abstraction, encapsulation, and inheritance in object-oriented design, making code more adaptable to changes and facilitating the creation of complex systems with hierarchical relationships.
