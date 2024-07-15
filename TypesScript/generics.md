# Generics

in TypeScript provide a way to create reusable components that can work with a variety of data types, while still maintaining type safety. Generics allow you to define classes, interfaces, and functions that can work with any data type rather than a single specific type.

Benefits of Generics:
Code Reusability: Generics enable you to write flexible and reusable components that can operate on a variety of data types, reducing code duplication.

Type Safety: TypeScript's type system ensures that generics are used correctly, providing compile-time type checking to catch type-related errors early.

Abstraction: Generics help in creating abstract data structures and algorithms that are independent of the specific types they manipulate, promoting higher-level design patterns.

Examples of Generics:

// A generic function that echoes back whatever is passed to it
function echo<T>(arg: T): T {
return arg;
}

// Calling echo with different types
let result1 = echo<number>(10); // result1 is of type number
let result2 = echo<string>("Hello, TypeScript!"); // result2 is of type string

console.log(result1); // Output: 10
console.log(result2); // Output: Hello, TypeScript!

In this example:

echo<T> defines a generic function where T is a type parameter.
The function echo returns the argument arg of type T, which allows it to work with any type.

// A generic class Box that holds a value of type T
class Box<T> {
private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

}

// Creating instances of Box with different types
let box1 = new Box<number>(10);
let box2 = new Box<string>("Hello, TypeScript!");

console.log(box1.getValue()); // Output: 10
console.log(box2.getValue()); // Output: Hello, TypeScript!

In this example:

Box<T> is a generic class where T represents the type of value it holds.
The constructor and getValue method work with the type T, allowing Box instances to store and retrieve values of any type.

// A generic interface Printable that defines a method to print objects of type T
interface Printable<T> {
print(): void;
}

// A class Book that implements the Printable interface for books
class Book implements Printable<string> {
constructor(private title: string) {}

    print(): void {
        console.log(`Book Title: ${this.title}`);
    }

}

// A class Car that implements the Printable interface for cars
class Car implements Printable<number> {
constructor(private year: number) {}

    print(): void {
        console.log(`Car Year: ${this.year}`);
    }

}

// Using instances of Book and Car
let book = new Book("TypeScript Handbook");
let car = new Car(2023);

book.print(); // Output: Book Title: TypeScript Handbook
car.print(); // Output: Car Year: 2023

In this example:

Printable<T> is a generic interface that specifies a method print() for objects of type T.
Classes Book and Car implement Printable with specific types (string for Book and number for Car), providing concrete implementations of the print() method.

# Constraints in Generics:

You can also apply constraints to generics in TypeScript using the extends keyword, which restricts the types that can be used with a generic parameter:

// A generic function that works only with objects that have a 'length' property
function getLength<T extends { length: number }>(obj: T): number {
return obj.length;
}

let result1 = getLength("Hello"); // OK, 'string' has 'length' property
let result2 = getLength([1, 2, 3]); // OK, 'array' has 'length' property
// let result3 = getLength(10); // Error, 'number' does not have 'length' property

console.log(result1); // Output: 5
console.log(result2); // Output: 3

In this example:

T extends { length: number } restricts T to types that have a length property of type number.
The function getLength can now safely access the length property of obj without causing runtime errors.
When to Use Generics:
Reusable Components: Use generics when you need to create components that can work with multiple data types while maintaining type safety.

Abstraction: Use generics to abstract over the specific types of data being manipulated, promoting code reusability and scalability.

Type Safety: Use generics to leverage TypeScript's type system to catch type-related errors early during development.

Generics are a powerful feature in TypeScript that allows you to write flexible and robust code, making your applications more adaptable to changing requirements and ensuring type safety throughout your codebase.

# Generic classes

Generic classes in TypeScript allow you to create classes that can work with multiple data types in a type-safe manner. They provide flexibility by allowing you to define classes with placeholders for types that are specified when instances of the class are created. This enables code reuse and maintains type safety at compile-time.

Syntax of Generic Classes:
To define a generic class in TypeScript, you use angle brackets (<>) with a type parameter inside the class declaration. Here’s a basic syntax:

class ClassName<T> {
// Class members and methods using the type parameter T
}

Where:

T is a type parameter that represents any data type.
You can use T throughout the class to define properties, methods, and other members that work with that type.
Example of a Generic Class:
Let's create a generic Box class that can hold a value of any type T:

class Box<T> {
private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }

}

// Creating instances of Box with different types
let numberBox = new Box<number>(10);
let stringBox = new Box<string>("Hello, TypeScript!");

console.log(numberBox.getValue()); // Output: 10
console.log(stringBox.getValue()); // Output: Hello, TypeScript!

numberBox.setValue(20);
stringBox.setValue("Hi there!");

console.log(numberBox.getValue()); // Output: 20
console.log(stringBox.getValue()); // Output: Hi there!

# Generic classes

Generic classes in TypeScript allow you to create classes that can work with multiple data types in a type-safe manner. They provide flexibility by allowing you to define classes with placeholders for types that are specified when instances of the class are created. This enables code reuse and maintains type safety at compile-time.

Syntax of Generic Classes:
To define a generic class in TypeScript, you use angle brackets (<>) with a type parameter inside the class declaration. Here’s a basic syntax:

class ClassName<T> {
// Class members and methods using the type parameter T
}

Where:

T is a type parameter that represents any data type.
You can use T throughout the class to define properties, methods, and other members that work with that type.
Example of a Generic Class:
Let's create a generic Box class that can hold a value of any type T:

class Box<T> {
private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }

}

// Creating instances of Box with different types
let numberBox = new Box<number>(10);
let stringBox = new Box<string>("Hello, TypeScript!");

console.log(numberBox.getValue()); // Output: 10
console.log(stringBox.getValue()); // Output: Hello, TypeScript!

numberBox.setValue(20);
stringBox.setValue("Hi there!");

console.log(numberBox.getValue()); // Output: 20
console.log(stringBox.getValue()); // Output: Hi there!

Explanation:
Box<T>: This is a generic class where T serves as a placeholder for the type of value the box will hold.

Constructor: The constructor initializes the value property with a value of type T.

Methods: getValue() returns the current value of type T, and setValue(newValue: T) updates the value with a new value of type T.

Instances: numberBox and stringBox are instances of Box that hold values of type number and string, respectively.

Constraints in Generic Classes:
You can also apply constraints to generic types in classes using the extends keyword to specify that the type parameter must extend a particular type or implement a specific interface:

interface Printable {
print(): void;
}

class Printer<T extends Printable> {
constructor(private obj: T) {}

    printObject(): void {
        this.obj.print();
    }

}

class Book implements Printable {
print(): void {
console.log("Printing a book...");
}
}

class Car {
// Car does not implement Printable interface
}

let bookPrinter = new Printer<Book>(new Book());
bookPrinter.printObject(); // Output: Printing a book...

// Compile-time error:
// let carPrinter = new Printer<Car>(new Car()); // Error: 'Car' does not implement 'Printable'

In this example:

Printer<T extends Printable>: Printer is a generic class where T must be a type that implements the Printable interface.

Printable Interface: Defines a print() method that classes like Book can implement.

Usage: bookPrinter can only be instantiated with types that implement Printable (like Book), ensuring that printObject() can safely call print() on obj.

When to Use Generic Classes:
Reusable Components: Use generic classes when you need to create components that can work with different data types while maintaining type safety.

Abstraction: Use generics to abstract over the specific types of data being manipulated, promoting code reusability and scalability.

Type Safety: Generics allow TypeScript's type system to catch type-related errors early during development, ensuring robust and reliable code.

Generic classes are a powerful feature in TypeScript that enable you to write flexible and reusable code, making your applications more adaptable to changing requirements and maintaining type safety throughout your codebase.

# generic functions

Generic functions in TypeScript allow you to create functions that can operate on a variety of data types while maintaining type safety. They enable you to write reusable code that can work with different types of parameters without specifying the type explicitly. This promotes code flexibility and reduces redundancy.

Syntax of Generic Functions:
To define a generic function in TypeScript, you use angle brackets (<>) with a type parameter inside the function name:

function functionName<T>(arg: T): T {
// Function body that uses the type parameter T
}

Where:

T is a type parameter that represents any data type.
You can use T throughout the function to define parameters, return types, and local variables that work with that type.
Example of a Generic Function:
Let's create a generic identity function that simply returns its argument:

function identity<T>(arg: T): T {
return arg;
}

// Calling identity with different types
let result1 = identity<number>(10); // result1 is of type number
let result2 = identity<string>("Hello, TypeScript!"); // result2 is of type string

console.log(result1); // Output: 10
console.log(result2); // Output: Hello, TypeScript!

Explanation:
identity<T>: This is a generic function where T serves as a placeholder for the type of argument (arg) and the return type.

Usage: identity<number>(10) specifies T as number, so arg must be a number, and result1 will be of type number. Similarly, identity<string>("Hello, TypeScript!") specifies T as string, so arg must be a string, and result2 will be of type string.

Constraints in Generic Functions:
You can apply constraints to generic types in functions using the extends keyword to specify that the type parameter must extend a particular type or implement a specific interface:

interface Printable {
print(): void;
}

function printObject<T extends Printable>(obj: T): void {
obj.print();
}

class Book implements Printable {
print(): void {
console.log("Printing a book...");
}
}

class Car {
// Car does not implement Printable interface
}

let book = new Book();
printObject(book); // Output: Printing a book...

// Compile-time error:
// let car = new Car();
// printObject(car); // Error: 'Car' does not implement 'Printable'

In this example:

printObject<T extends Printable>: printObject is a generic function where T must be a type that implements the Printable interface.

Printable Interface: Defines a print() method that classes like Book can implement.

Usage: printObject(book) can only be called with types that implement Printable (like Book), ensuring that obj.print() can safely be invoked.

When to Use Generic Functions:
Reusable Components: Use generic functions when you need to create functions that can work with different data types while maintaining type safety.

Abstraction: Use generics to abstract over the specific types of data being manipulated, promoting code reusability and scalability.

Type Safety: Generics allow TypeScript's type system to catch type-related errors early during development, ensuring robust and reliable code.

Generic functions are essential in TypeScript for writing flexible and reusable code that can adapt to various data types without sacrificing type safety. They help in creating more versatile and maintainable applications by promoting the use of common interfaces and reducing code duplication.

# Generic interfaces

Generic interfaces in TypeScript allow you to define interfaces with placeholders for types that can be specified when implementing the interface. This enables you to create flexible and reusable components that work with a variety of data types while maintaining type safety.

Syntax of Generic Interfaces:
To define a generic interface in TypeScript, you use angle brackets (<>) with a type parameter inside the interface declaration:

interface InterfaceName<T> {
// Method signatures or property declarations that use the type parameter T
}

Where:

T is a type parameter that represents any data type.
You can use T throughout the interface to define method signatures, property types, and other members that work with that type.
Example of a Generic Interface:
Let's create a generic Box interface that represents a box holding a value of type T:

interface Box<T> {
value: T;
getValue(): T;
setValue(value: T): void;
}

// Implementing the Box interface for a number
class NumberBox implements Box<number> {
private \_value: number;

    constructor(value: number) {
        this._value = value;
    }

    getValue(): number {
        return this._value;
    }

    setValue(value: number): void {
        this._value = value;
    }

}

// Implementing the Box interface for a string
class StringBox implements Box<string> {
private \_value: string;

    constructor(value: string) {
        this._value = value;
    }

    getValue(): string {
        return this._value;
    }

    setValue(value: string): void {
        this._value = value;
    }

}

// Using instances of NumberBox and StringBox
let numBox = new NumberBox(10);
let strBox = new StringBox("Hello, TypeScript!");

console.log(numBox.getValue()); // Output: 10
console.log(strBox.getValue()); // Output: Hello, TypeScript!

Explanation:
Box<T>: This is a generic interface where T serves as a placeholder for the type of value stored in the box.

NumberBox and StringBox Classes: Implement the Box interface with specific types (number for NumberBox and string for StringBox).

Usage: Instances of NumberBox and StringBox use the methods defined in the Box interface (getValue and setValue) to interact with their respective values.

Constraints in Generic Interfaces:
You can apply constraints to generic types in interfaces using the extends keyword to specify that the type parameter must extend a particular type or implement a specific interface:

interface Printable {
print(): void;
}

interface PrintableBox<T extends Printable> {
value: T;
printValue(): void;
}

class Book implements Printable {
print(): void {
console.log("Printing a book...");
}
}

class Car {
// Car does not implement Printable interface
}

class Box<T extends Printable> implements PrintableBox<T> {
value: T;

    constructor(value: T) {
        this.value = value;
    }

    printValue(): void {
        this.value.print();
    }

}

let book = new Book();
let bookBox = new Box<Book>(book);
bookBox.printValue(); // Output: Printing a book...

// Compile-time error:
// let carBox = new Box<Car>(new Car()); // Error: 'Car' does not implement 'Printable'

In this example:

PrintableBox<T extends Printable>: PrintableBox is a generic interface where T must be a type that implements the Printable interface.

Box<T> Class: Implements PrintableBox<T> with a specific type T that extends Printable, ensuring that printValue() can safely call value.print().

Usage: bookBox can only be instantiated with types that implement Printable (like Book), ensuring that printValue() can safely be invoked.

When to Use Generic Interfaces:
Reusable Components: Use generic interfaces when you need to define interfaces that can work with multiple data types while maintaining type safety.

Abstraction: Use generics to abstract over the specific types of data being manipulated, promoting code reusability and scalability.

Type Safety: Generic interfaces enable TypeScript's type system to catch type-related errors early during development, ensuring robust and reliable code.

# Generic constraints

Generic constraints in TypeScript allow you to restrict the types that can be used with a generic type parameter. Constraints ensure that generic types satisfy certain conditions, such as extending a specific class or implementing a particular interface. This helps enforce type safety and enables you to work with a subset of types that share common behavior or structure.

Syntax of Generic Constraints:
To apply constraints to a generic type parameter in TypeScript, you use the extends keyword followed by the type or interface that the generic type must extend or implement:

function functionName<T extends SomeType>(arg: T): void {
// Function body that uses the type parameter T
}

Where:

T is the generic type parameter.
extends SomeType specifies that T must be a subtype of SomeType (either a class or an interface).
Example of Generic Constraints:
Let's create a function printName that accepts an object obj with a name property. We'll use a generic constraint to ensure that obj must have a name property:

interface Named {
name: string;
}

function printName<T extends Named>(obj: T): void {
console.log(obj.name);
}

// Valid usage
let person = { name: "Alice", age: 30 };
printName(person); // Output: Alice

// Invalid usage (compile-time error)
// let car = { brand: "Toyota", year: 2020 };
// printName(car); // Error: Argument of type '{ brand: string; year: number; }' is not assignable to parameter of type 'Named'.
// Property 'name' is missing in type '{ brand: string; year: number; }' but required in type 'Named'.

Explanation:
Named Interface: Defines an interface with a name property of type string.

printName Function: Uses a generic constraint T extends Named to specify that obj must have a name property. This ensures type safety because TypeScript will enforce that any argument passed to printName must conform to the Named interface.

Usage: person object has a name property and can be passed to printName, resulting in the name being printed. Attempting to pass an object like car without a name property will result in a compile-time error, indicating a type mismatch.

## Multiple Constraints:

You can apply multiple constraints to a generic type parameter by using an intersection (&) of types:

interface Printable {
print(): void;
}

function printValue<T extends Printable & Named>(obj: T): void {
console.log(`Name: ${obj.name}`);
obj.print();
}

class Book implements Printable, Named {
name: string;

    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log(`Printing book: ${this.name}`);
    }

}

let book = new Book("TypeScript Handbook");
printValue(book);

In this example:

T extends Printable & Named specifies that T must extend both Printable (have a print() method) and Named (have a name property).

The printValue function can safely call obj.name and obj.print() because it ensures that obj meets both constraints (Printable and Named).

When to Use Generic Constraints:
Type Safety: Use constraints to ensure that generic types adhere to specific requirements, such as having certain properties or methods, thereby reducing runtime errors.

Code Reusability: Apply constraints to create more flexible and reusable components that can work with a variety of types while enforcing common behavior.

Abstraction: Constraints allow you to abstract over the specific types of data being manipulated, promoting higher-level design patterns and reducing code duplication.

Generic constraints in TypeScript are essential for creating robust and maintainable code by enforcing type contracts that make your code more predictable and less error-prone. They enable you to leverage TypeScript's type system to catch potential issues early in the development process, ensuring safer and more reliable software.
