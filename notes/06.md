# 06 :: Optional Props

> Notes/Talking Points

```

## Optional Props

// our car type
{
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}
```

* `chargeVoltage` may/may not be there; if it is, it'll be a number
* when writing a branch of code that will only execute if an optional value is set, TS eliminates the `undefined` possibility. this is a *Type Guard*

```
let str = `My car is a ${car.year} ${car.make} ${car.model}.`;

if (typeof car.chargeVoltage !== undefined) {
  str += `It's an electric vehicle that charges at ${car.chargeVoltage}v.`;
  // car.chargeVoltage in the template literal above will not hint "| undefined"
}
```

* note there's a big big big difference between an optional property and a property defined as possibly being `undefined`

```
// if typed ...
{
  prop1: string;
  prop2: string | undefined;
}

...

// this will complain, as prop2 is not optional
{
  prop1: 'hello',
}

...

// you'd have to do 
{
  prop1: 'hello',
  prop2: undefined,
}
```

* defined, non-optional properties must be present even if "nothing" is an acceptable value

## Excess Props

* TS also checks for excess props, stuff not defined on the type
* using the car type above ...

```
{
  make: 'Tesla',
  model: 'Model S',
  year: 2019,
  chargeVoltage: 220,
  color: 'red',
}
// TS errors "may only specify known properties" for red
```

* extra props can never be safely used; it's an appendix
* can be fixed by:
  * removing the `color` prop from the object
  * Adding a `color: string` prop to the consuming arg list
  * pass `color` separately

*NOTE:* this extra bit of info came from the Q/A in the following module; i stashed it here for clarity/context because we're actually talking about objects

* "can never be safely used" -- why not?
* the FEM workshop example was set up differently than above; the type was specified in a function declaration

```
function doSomethingWithCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  // type `car.co` and it will not hint/appear; TS does not know `color` exists on the give `car`
}

...

doSomethingWithCar({
  make: 'Tesla',
  model: 'Model S',
  year: 2019,
  chargeVoltage: 220,
  color: 'red', // <-- EXTRA PROP, no way to ever access this prop outside the func
}) {
  // ...
}
```

* if the car obj was stored as a var instead of passed directly to the function, TS would _not_ complain and you _could_ access `car.color` because the existence of `color` could not be disproven
