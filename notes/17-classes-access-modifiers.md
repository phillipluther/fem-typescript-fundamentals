# 17 :: Classes & Access Modifiers

> public readonly year: number

## Notes/Talking Points

* TS provides powerful features on top of the JS concept of classes
  * class fields
  * access modifier keywords (public, private, protected)
  * param properties

### Class Fields

in JS, classes take arguments in the constructor and tack 'em onto the class

```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let myCar = Car('Nissan', 'Rogue', 2015);
```

* the above is not a well-defined type
  * all args are any type
  * arg order is not checked
* in TS

```
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
```

* class fields are stated up-front
* constructor args are now mapped to class fields
* ... but verbose!

### Access Modifier Keywords

indicates the visibility of class fields and methods

keyword | who can access
--------|---------------
`public` | everyone (default)
`private` | only the instance itself
`protected` | the class instance and subclasses

```
class Car {
  public make: string;
  public model: string;
  public year: number;
  protected vinNumber = generateVinNumber();
  private doorLockCode = generateDoorLockCode();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // allow usage of the private prop; control access paths
  protected unlockAllDoors() {
    unlockCar(this, this.doorLockCode);
  }
}

class Sedan extends Car {
  constructor(make: string, model: string, year: number) {
    super(make, model, year);
    console.log(this.vinNumber); // no problem
    console.log(this.doorLockCode); // TS error, since code is private on parent class
  }
}
```

* adding the access modifier keywords is a great encapsulation tool/limited exposure
  * since no subclasses can directly use `doorLockCode` we can safely change its implementation
  * ^ as long as `unlockAllDoors` does the same thing!
* note that it's still just JS, aka public and shipped to the browser ... private is for encapsulation, not security

#### `readonly`

* TS also has the `readonly` keyword
  * similar to `const` for class fields
  * value can only be set in the constructor

```
class Car {
  ...
  public readonly year: number;
  ...
}
```

### Param Properties

* defining class fields and using access modifier keywords is VERBOSE

```
class Car {
  public make: string;

  constructor(make: string) {
    this.make = make;
  }

  // 4 different "make"!
}
```

* just put it all in the constructor

```
class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
}
```

