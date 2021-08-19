# 03 :: Variables & Values

> Notes/Talking Points

- TS infers types from simple `let` variable declarations, unlike Java/C#

```
let age = 6; // infers "age" is a number
age = 'seven'; ERR: Type 'string' is not assignable to type 'number'
```

- `const` declarations infer a _literal_ type, since the thing itself can't be reassigned

```
const age = 6; // the type of "age" is 6, and 6 is immutable
```

- initialized-but-undeclared variables with `let` are implicitly `any` type; in this case, appropriate to use `:` type declaration because TS has nothing to go on

```
let startTime; // type "any"
let endTime: Date; // type "Date"

...

// do stuff
startTime = new Date();
endTime = new Date();

startTime = 'hello'; // will fly
endTime = 'goodbye'; //won't fly
```

- only add type annotations when you have to, as above; extra noise in code otherwise
- typing functions

```
function add(a: number, b: number) {
  return a + b;
}
```

- from the above, compiler can infer the return value of `add` -- a number and a number -- is also a number, so no need to type the function
