# 11 :: Intersection Types

> Ampersand syntax ... `Date & { end: Date }`

## Notes/Talking Points

* far more rare than union types; why?
* an "and" of types

```
const A_WEEK_LATER = 1000 * 60 * 60 * 24 * 7;

// returns a Date object that _also_ contains an `end` property
function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + A_WEEK_LATER);

  return {
    ...start,
    end,
  };
}
```

* note we did not extend `Date` (prototype) itself; we created a new thing and just appended an extra prop
* in practice, there's about a 50:1 ratio of unions to intersections
  * this follows code branching/control flow; functions usually branch `if`/`else`, which is a union
  * my func returns this thing _or_ that
