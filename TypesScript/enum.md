# Enums in TypeScript

Enums (short for "enumerations") are a feature in TypeScript that allows you to define a set of named constants. Using enums can make your code more readable and intent clear, especially when dealing with a set of related values.

## Basic Usage

An enum is defined using the `enum` keyword. Here's a simple example:

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

Accessing Enum Values
You can access enum values using both their names and their numeric values:

let dir: Direction = Direction.Up;
console.log(dir); // Output: 0

console.log(Direction[0]); // Output: "Up"


Customizing Enum Values
You can assign custom values to enum members. If a value is not provided, it will auto-increment from the previous member:

enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}



String Enums
Enums can also have string values:

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}


Heterogeneous Enums
TypeScript allows enums to be mixed with both string and numeric values, though this is not commonly used:

enum MixedEnum {
    No = 0,
    Yes = "YES"
}



Conclusion

Enums in TypeScript provide a way to define a set of named constants, making the code more readable and maintainable. Whether using numeric, string, or heterogeneous enums, they offer flexibility and clarity in representing related values.
```
