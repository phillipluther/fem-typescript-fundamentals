# 15 :: Functions & Function Overloads

> type SimpleCalculation = (x: number, y: number) => number;

## Notes/Talking Points

* *callable types* -- types or interfaces that can be used to describe something that can be invoked, or something that can be instantiated using the `new` keyword
* *function overloads*

### Callable Types/Call Signatures

* both `type` and `interface` aliases can describe call signatures

```
// as a type
type SimpleCalcType = (x: number, y: number) => number;

// interface
type SimpleCalcInterface {
  (x: number, y: number): number;
}

// in use ...
const add: SimpleCalcType = (x, y) => x + y;
const multiply: SimpleCalcInterface = (x, y) => x * y;
```

#### Void

* TS offers the `void` return type for functions whose return value should be ignored
  * note this is different than "no return value," which would be `undefined`
* `void` means the return value can be ignored

```
// explicitly returns no value
function fourSecondTimeout(callback: () => undefined) {
  setTimeout(callback, 4000);
}

// safely ignores the return value
function fiveSecondTimeout(callback: () => void) {
  setTimeout(callback, 5000);
}

const vals: number[] = [];

fourSecondTimeout(() => vals.push(4)); // will complain; push returns a value
fiveSecondTimeout(() => vals.push(5)); // all good; push's return is ignored
```

### Construct Signatures

* similar to call sigs but for use with `new`
* not very common

```
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor();
```

### Function Overloads

* imagine a use case where you're passed a form submission or a message from an iframe
  * need to handle each of them separately but with a single handler
  * use a function overload!

```
function handleEvent(el: HTMLFormElement, handler: FormSubmitHandler);
function handleEvent(el: HTMLIFrameElement, handler: MessageHandler);
function handleEvent(
  el: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
)
```

* prevents incorrect unions -- using the `FormSubmitHandler` on an `HTMLIFrameElement`, eg.
* the above appears like it's 3 different functions
  * the first two are *heads* to define an argument list and return type
  * the last one is the actual implementation
  * defines TS "branches"
