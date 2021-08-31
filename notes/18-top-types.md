# 18 :: Top Types

> `any` and `unknown` -- anything the system allows

## Notes/Talking Points

* thinking of types in terms of Set Theory
  * simple idea ... types define a set of values that a variable might be
* `let x: boolean;` --> x can be any item from the set of `{true, false}`
* `let y: number;` --> y can be any number; in set build notation `{y | y is a  number}`
  * within the set, "any number allowable in JS"

### Top Types

* top types describe any possible value allowed by the system
  * `any` and `unknown` literally allow any type available in JS

#### `any`

```
let flexible: any = 4;
flexible = true;
flexible = () => null;
```

* risks around `any` ... can't safely rely on it; have to type guard it to all hell
* is it every appropriate to use `any`? sure! logging, eg. `console.log`
  * typed as `(method) Console.log(...data: any[]): void`
  * another?

#### `unknown`

```
// seemingly just like `any`
let flexible: unknown = 4;
flexible = true;
flexible = () => null;
```

* but! `unknown` types *can not* be used with out narrowing with a type guard first

```
let myUnknown: unknown = 4;
console.log(myUnknown.some.deep.prop); // TS error; need to guard

if (typeof myUnknown === 'string') {
  console.log(myUnknown); // hints `let myUnknown: string`
} else if (typeof myUnknown === 'number') {
  console.log(myUnknown); // hints `let myUnknown: number`
} else {
  ...
}
```

### Practical Uses for Top Types

* heavy use in converting JS projects to TypeScript
  * clean up `any`s in multiple passes
  * use `unknown` for data responses from API layer; values received at runtime
