# 19 :: Bottom Types

> `never`

## Notes/Talking Points

* bottom types describe things that can hold no possible value
  * you're free to choose anything you want ... from an empty set
  * TS provides exactly one bottom type -- `never`
* pretty much a single use -- exhaustive conditionals

### Exhaustive Conditionals

consider the following ...

```
class Car {
  drive() {
    console.log('vroom');
  }
}

class Truck {
  tow() {
    console.log('what a drag');
  }
}

type Vehicle = Truck | Car;
let myVehicle = getRandomVehicle();

// type guard for truck
if (myVehicle instanceof Truck) {
  myVehicle.tow(); // safe
} else if (myVehicle instanceof Car) {
  myVehicle.drive(); // safe
} else {
  // there is _nothing_ else `myVehicle` can be -- only a car or truck
  const neverValue: never = myVehicle;
}
```

* `never` signifies all cases have been handled; the conditional is exhaustive
* if someone comes along and adds a `Boat` class and ties it into `getRandomVehicle`
  * TS will complain about the `never`, saying -- "well, it could be boat!"
* in type guards, `never` enforces you deliberately handle or deliberately not-handle a case
* can catch errors at compile time, not runtime
