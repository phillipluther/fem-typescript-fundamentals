# 08 :: Arrays & Tuples

> Notes/Talking Points

## Arrays

* positional storage VS. key/val (objects), so merely need to describe contents; an array of what?
* can use previously defined types just like any other type

```
const simpleArray: string[] = ['ok'];

// array of objects
type MyType = {
  thing1: string;
  thing2: number;
}

const arrayOfObjects: MyType[] = [];
```

## Tuples

* "what's a tuple?" array where the order defines what's in that position; the order is convention
* tuples are tough for TS to infer ... a mixed array of arbitrary length that contains some mix of strings and numbers
* when typing a tuple, think of "what do you want most of the time?"

```
let myCar: [number, string, string] = [
  1987,
  'Nissan',
  'Sentra',
];

myCar = ['Honda', 'Accord', 2021]; // "TS Error: can't assign string to number" etc.
// ... or ...
myCar = ['Honda', 2021, 'Accord', 'Coupe']; // "TS Error: expect 3 elements, got 4"
```

* TS is loose with tuples because there's no concept of a type change
  * Eg., in JS a tuple is an array (primitive), so it has `push`, `pop`, etc. array methods
  * `let numPair: [number, number] = [2, 8];`
  * you can `numPair.push(10); // [2, 8, 10]` ... you've effectively changed your type declaration because it's no longer `[number, number]`
  * there is a proposal for "real" tuples in JS, though ... there are proposals for a _lot_ of things in JS



