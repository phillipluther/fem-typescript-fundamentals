# 21 :: Nullish Values

> `null`, `undefined`, and `void`

## Notes/Talking Points

* when to use null, undefined, and void
* non-null assertion operator
* definite assignment operator

### `null`

* there _is_ a value for something, and that value is "nothing"
* "nothing" is an explicit value

### `undefined`

* we haven't gotten to a value, or
* we will never get to a value

### `void`

* explicitly used for function return values
* says the value of the function should be ignored

### Non-null assertion

> `!.`

* similar syntax to optional chaining (`myObj.someProp?.someDeeperProp?.val`)
* `someObj.someArr!.push(someVal)`
* forces the type system to ignore the possibility of `undefined`
* very handy in test suites where throwing is a failed test
* in app or lib code, type guards are more appropriate; non-null assertion is a tough error to hit

### Definite assignment operator

> `!` used on class fields

* constructors can't be async but can kick off async setup
* when values are typed and unset, then set in async methods TS has no idea when or if that value will ever be set

```
class ThingWithSetup {
  setupPromise: Promise<any>;
  isSetup: boolean;

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false; // <-- not definitely assigned
      return this.someAsyncMethod();
    }).then(() => {
      this.isSetup = true;
    })
  }

  // ... VS ...

  constructor() {
    this.isSetup = false; // <-- definitely assigned
    this.setupPromise = new Promise((resolve) => this.someAsyncMethod())
      .then(() => {
        this.isSetup = true;
      });
  }
}
```

* the definite assignment operator says, "TS ... don't sweat it. i -- the software engineer -- will ensure this thing gets a value"
* useful in component lifecycle hooks
