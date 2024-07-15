# Advanced Types in TypeScript

TypeScript provides several advanced types that enhance its type system, making it more powerful and expressive. These advanced types allow for more precise type definitions and enable complex type manipulations.

## 1. Intersection Types

Intersection types combine multiple types into one. An object of an intersection type will have all properties from the combined types.

```typescript
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

const employee: Person & Employee = {
    name: 'John',
    age: 30,
    employeeId: 1234
};


2. Union Types
Union types allow a variable to hold one of several types. A value of a union type can be any one of its specified types.

let value: string | number;
value = 'Hello';
value = 123;
// value = true; // Error: Type 'true' is not assignable to type 'string | number'.


3. Type Guards
Type guards are used to narrow down the type within a union type. They help TypeScript understand the specific type at runtime.

typescript
function printId(id: string | number) {
    if (typeof id === 'string') {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id.toFixed(2)}`);
    }
}


4. Literal Types
Literal types allow you to specify exact values a variable can have. They can be combined with union types for more flexibility.

type Direction = 'Up' | 'Down' | 'Left' | 'Right';

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move('Up');
// move('North'); // Error: Argument of type '"North"' is not assignable to parameter of type 'Direction'.

5. Nullable Types
Nullable types allow you to specify that a value can be null or undefined along with another type.

let name: string | null = 'John';
name = null;
// name = undefined; // Error: Type 'undefined' is not assignable to type 'string | null'.


6. Type Aliases
Type aliases create a new name for a type. They are useful for simplifying complex type definitions.

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 123;


7. keyof and Lookup Types
The keyof operator is used to get a union of literal types of the keys of an object type. Lookup types allow you to get the type of a property.

interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

function getValue(obj: Person, key: PersonKeys) {
    return obj[key];
}


8. Mapped Types
Mapped types allow you to transform existing types into new types. They are often used with keyof and template literal types.

type ReadonlyPerson = Readonly<Person>;

let person: ReadonlyPerson = {
    name: 'John',
    age: 30
};

// person.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.


9. Conditional Types
Conditional types use a ternary-like syntax to select types based on a condition.

type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>; // 'yes'
type B = IsString<number>; // 'no'


10. Recursive Types
Recursive types are types that reference themselves. They are useful for defining tree structures or JSON-like objects.

interface Category {
    name: string;
    subcategories?: Category[];
}

const category: Category = {
    name: 'Electronics',
    subcategories: [
        { name: 'Phones' },
        { name: 'Laptops', subcategories: [{ name: 'Gaming Laptops' }] }
    ]
};


11. Type Assertions in TypeScript

Type assertions are used to inform the TypeScript compiler about the type of a variable when you, as the developer, have more information about the type than TypeScript can infer.

## Syntax

There are two ways to use type assertions in TypeScript:

### 1. `as` Syntax

This is the preferred and more common syntax:

typescript
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

Use Cases
1. Narrowing Down Types
Type assertions are often used when you know the specific type of a value that is more precise than what the compiler knows.
function getLength(value: string | number): number {
    if ((value as string).length !== undefined) {
        return (value as string).length;
    } else {
        return value.toString().length;
    }
}


2. Working with DOM Elements
When interacting with the DOM, you may need to assert the specific type of an element.

let inputElement = document.getElementById('myInput') as HTMLInputElement;
inputElement.value = "Hello, World!";


3. Avoiding Type Errors
Type assertions can help bypass type errors when you are confident about the type but TypeScript cannot infer it.

interface Person {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "John";
person.age = 30;




# Optional Chaining in TypeScript

Optional chaining is a feature in TypeScript that allows you to safely access deeply nested properties of an object without having to explicitly check for the existence of each level in the hierarchy. This feature helps prevent runtime errors that occur when accessing properties on `null` or `undefined`.

## Syntax

The syntax for optional chaining uses the `?.` operator:

typescript
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)


Use Cases
1. Accessing Nested Properties
Optional chaining allows you to access properties of an object that may or may not exist.

interface User {
    name?: {
        firstName?: string;
        lastName?: string;
    };
}

let user: User = {};

console.log(user.name?.firstName); // undefined


2. Accessing Array Elements
Optional chaining can be used to safely access elements of an array.

let arr: number[][] = [[1, 2, 3]];

console.log(arr[1]?.[0]); // undefined


3. Calling Functions
Optional chaining can be used to safely call functions that may not be defined.

interface User {
    getName?: () => string;
}

let user: User = {};

console.log(user.getName?.()); // undefined



Combining with Nullish Coalescing
Optional chaining is often used in conjunction with the nullish coalescing operator (??), which provides a default value when the result of an expression is null or undefined.

let user: User = {};

console.log(user.name?.firstName ?? 'Default First Name'); // 'Default First Name'


Practical Examples
Accessing API Response Data
When working with API responses, you may encounter objects with nested structures where some properties are optional.

interface ApiResponse {
    data?: {
        user?: {
            id?: number;
            name?: string;
        };
    };
}

let response: ApiResponse = {};

let userId = response.data?.user?.id ?? 'No ID';
console.log(userId); // 'No ID'


Safely Accessing DOM Elements
When interacting with the DOM, optional chaining can be useful to check if an element exists before accessing its properties or methods.

let element = document.getElementById('myElement');
console.log(element?.innerHTML); // undefined if element is null
```
