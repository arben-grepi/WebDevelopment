# TypeScript Functions vs. JavaScript Functions

TypeScript, a superset of JavaScript, enhances the language with optional static types. While TypeScript functions share many similarities with JavaScript functions, there are several key differences and enhancements that TypeScript provides.

## 1. Type Annotations

### JavaScript

In JavaScript, functions do not have type annotations. The parameters and return values are dynamically typed:

```javascript
function add(a, b) {
    return a + b;
}


TypeScript
TypeScript allows you to specify types for function parameters and return values:

function add(a: number, b: number): number {
    return a + b;
}



2. Optional and Default Parameters
JavaScript
JavaScript supports default parameters but does not have a syntax for optional parameters:
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}


TypeScript
TypeScript supports both optional parameters (with ?) and default parameters:

function greet(name: string = 'Guest', age?: number): void {
    console.log(`Hello, ${name}`);
    if (age !== undefined) {
        console.log(`You are ${age} years old.`);
    }
}


3. Function Overloading
JavaScript
JavaScript does not support function overloading directly. You typically handle different parameter types or counts using conditional logic inside the function:

function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Parameters must be of the same type');
}


TypeScript
TypeScript supports function overloading, allowing you to define multiple signatures for a single function:

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Parameters must be of the same type');
}
Here, combine has two overload signatures for different parameter types.


4. Arrow Functions
JavaScript
JavaScript introduced arrow functions in ES6, providing a shorter syntax for function expressions:

const add = (a, b) => a + b;

TypeScript
TypeScript supports arrow functions with type annotations:

const add = (a: number, b: number): number => a + b;

This allows you to specify the types of parameters and the return type.


```
