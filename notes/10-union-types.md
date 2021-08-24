# 10 :: Union Types

> Pipe syntax ... 'success' | 'error'

## Notes/Talking Points

* union/intersection just or/and ... logical boolean operators
* imagine an array of fruits and an array of foods that are sour
  * the union is anything in either array, including things in both
  * something is a fruit _or_ is sour
* a *union type* is an "or" for types; an *intersection type* is an "and" for types
* union types are represented with a pipe

```
'success' | 'error'
...
string[] | undefined
```

* common example using tuples (from module 08) for collecting errors instead of throwing; custom logging or the like

```
const outcome: ['error', Error] | ['success', {
  name: string;
  email: string;
}]
```

* though, when a value has a type that includes a union we can only use the common behavior (guaranteed to be there)
  * this would be `name` in the example above
  * `Error`s have a `name` and the custom `success` object has a `name`
  * if tried to access `success.email` TS would complain because `Error` does not have an email prop ... and the outcome can be an error _or_ success

### Narrowing

* we can deal with the above success/error prop ambiguity by narrowing with type guards (mentioned in Module 05)
* for the above ...

```
if (outcome[1] instanceof Error) {
  ...
} else {
  ...
}
```

* or better yet, via a *discriminated union* when we have a unique/discreet hook to differentiate
* aka, *tagged* union type

```
if (outcome[0] === 'error') {
  ...
} else {
  ...
}
```
