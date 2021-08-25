# 13 :: Interfaces

> `interface ObjTypeExample { ... }`

## Notes/Talking Points

* used to define *object types* -- essentially, "what an instance of a class looks like"
  * note that anything using a union operator is not an object type
  * so more limited than `type`
* inheritance is important (and possible); uses *heritage clauses* like `extends` and `implements`
* `extends` is for describing inheritance between like things; `implements`, unlike things
* recommended to only use interfaces with `implements`

### Open Interfaces

```
interface AnimalLike {
  isAlive: boolean;
}

...

// doesn't overwrite and doesn't complain, it augments. it augments GLOBALLY
interface AnimalLike {
  eat(food): void;
}

...

function doSomethingAnimalLike(animal: AnimalLike) {
  // animal will have both isAlive and eat()
}
```

* why is this useful?
  * tacking one thing on an external lib (if types are incomplete)
  * augmenting globals, eg.
* augmenting interfaces happens across files ... type-checking is one giant holistic check

```
// global global
interface Window {
  someCustomThing: string;
}
```

### Why use one over the other?

most of the time, totally up to you. however!

* if you need to define something other than an object type (union operator), use `type`
* if you need to implement `implements`, use an `interface`
* if you need to let your audience augment a type, use an `interface`

### Recursive Types

* self-referential and usually used to describe infinitely nested types

```
type NestedNumbers = number | NestedNumbers[];
const nestedNumbers: NestedNumbers = [1, [2, 3], 4, [5, [6, 7]]];
```

