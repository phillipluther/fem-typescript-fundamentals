# 16 :: `this` Types & Best Practices

> someFunc(this: HTMLButtonElement, event: Event) { ... }

## Notes/Talking Points

* the type of "this" in a function when invoked

```
function clickHandler(event: Event) {
  this.disabled = true;
  // ^ TS complains; it has no way of knowing how you're using this function
}
```

* `this` types are included along side the argument definitions
  * kinda follows the same principle as calling `call` or `apply`

```
function clickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
```

## Function Type Best Practices

these are just appended onto the short module for `this` types; maybe someday we'll reorganize these notes. likely not.

* explicitly define return types
  * errors surface closer to where they need to be fixed, not where they'll break
