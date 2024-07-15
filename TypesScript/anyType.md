## TypeScript `any` Type

The `any` type in TypeScript represents any kind of value. It allows you to opt-out of type checking for a particular variable, providing flexibility but reducing type safety.

NOt recommended to be used, because it removes the whole point of TypeScripts

### Example Usage

```typescript
let value: any;

value = 5; // OK
value = "hello"; // OK
value = true; // OK
value = [1, "two"]; // OK
value = { key: "value" }; // OK
```
