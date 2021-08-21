# 05 :: Functions Q&A and Objects

> Notes/Talking Points

## Functions Q&A

* "any" doesn't just cause problems with itself; it compromises well-typed code. it can hold anything and masquerade as anything
* declarative nature of TS prevents defensive programming ... but incoming Type Guards!
* any use case for "any?" stay tuned (ahem, never)

## Objects

* objects are 2 things: what properties are on this object, and what are the types of these props?
  * recursively, this describes a shape/deeply nested obj
  * "what props do you have, and what can i store there?"
* take the classic car example ... make, model, year

```
// key/val pairs
{
  make: "Toyota",
  model: "Supra",
  year: 1995,
}

...
// key/type pairs
{
  make: string;
  model: string;
  year: number;
}
```
