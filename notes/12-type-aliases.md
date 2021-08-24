# 12 :: Type Aliases

> `type` SomeType = { ... }

## Notes/Talking Points

* a way to give a friendly/semantic/more meaningful name to types
* interface VS. type? tbd, but mostly differing in --
  * how they handle inheritance
  * interfaces are "open"
  * which to use?
* can declare/import/export types for reuse

```
export type UserContactInfo = {
  name: string;
  email: string;
}

function someUserContactFunc(data: UserContactInfo) {
  ...
}
```

* just like vars, can only have a single type of a given name within scope
  * the above is NOT true of interfaces!
* speaking of inheritance, `type` has pseudo-inheritance/-extension via intersection types

```
type SpecialDate = Date & {
  getReason(): string;
}
// extends `Date` with a custom `getReason` method

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => 'Last day of the year!',
};
```
