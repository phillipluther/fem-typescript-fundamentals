# 22 :: Generics

> 

## Notes/Talking Points

* the culmination of TS fundamentals!
* types that are expressed in terms of other types
* great op to reuse types across the codebase

Generics are all about defining a relationship between something we're given and something we're returning

### List to dictionary use-case/example

* need to produce a key for each object in the dictionary

```
interface PhoneInfo {
  customerId: string;
  areaCode: string;
  num: string;
}

function listToDict(
  list: PhoneInfo[],
  idGen: (arg: PhoneInfo) => string // callback for getting IDs
): {
  [k: string]: PhoneInfo
} {
  // ... return a dictionary
}
```

### Type parameters

* function arguments, but for types; think of it exactly the same as function arguments
* angle bracket syntax `SomeType<TypeParam>`
* often uses `T` as the param (`SomeType<T>`), which comes from template classes in C

Eg.
```
function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string,
): {
  [k: string]: T
} { ... }
```

* stupid simple function to break it down and look at how it works

```
// blast from the past function name!
function makeArray<T>(arg: T): [T] {
  return [arg];
}

makeArray(3); // T is number ... makeArray<number>(arg: number): [number] ...
makeArray(new Date()); // ... makeArray<Date>(arg: Date): [Date] ...
etc.
```
