# 20 :: Type Guards and Narrowing

> `instanceof`, `typeof`, `Array.isArray`, truthy/falsy values, etc.

## Notes/Talking Points

* Built-in type guards
  * type-checking via native guards, such as `instanceof` or `typeof`
  * `else` blocks in exhaustive conditionals

### User-defined Type Guards

* difficult to use simple built-in type guards to define `CarLike`
  * does car exist?
  * is it an object?
  * does it have a `make` property that's a `string`?
  * does it have a `model` property that's a `string`?
  * etc. etc. etc.

#### "is" type guard

> `myValue is Foo`

an explicit definition of an interface (or type) 

```
// "is CarLike" is the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return {
    valueToTest &&
    typeof valueToTest === 'object' &&
    'make' in valueToTest &&
    typeof valueToTest.make === 'string'
    // ... etc.
  }
}

if (isCarLike(maybeCar)) {
  console.log(maybeCar); // inside the guard, TS now knows `maybeCar` is CarLike
}
```

* type guards are the blue between compile-time validation and run-time behavior
* you must ensure validation and behavior match up

#### "asserts" type guard

> `asserts myValue is Foo`

assertion library-like behavior that will throw if a given value doesn't pass the `is` check

```
// if this function finishes without throwing, valueToTest is CarLike
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === 'object' &&
      'make' in valueToTest &&
      typeof valueToTest.make === 'string'
      // ... etc.
    )
  ) {
    throw new Error('Value is not CarLike');
  }
}

// not specifically control flow, but can't reach the next line if not
assertsIsCarLike(maybeCar);
console.log(maybeCar); // must be CarLike because we didn't throw
```

