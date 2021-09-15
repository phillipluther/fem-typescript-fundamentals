# 21 :: Nullish Values

> `null`, `undefined`, and `void`

## Notes/Talking Points

* when to use null, undefined, and void
* non-null assertion operator
* definite assignment operator

### `null`

* there _is_ a value for something, and that value is "nothing"
* "nothing" is an explicit value

### `undefined`

* we haven't gotten to a value, or
* we will never get to a value

### `void`

* explicitly used for function return values
* says the value of the function should be ignored

### Non-null assertion

> `!.`

* similar to optional chaining (`myObj.someProp?.someDeeperProp?.val`)
* "if there" ... `someObj.someArr!.push(someVal)`
* very handy in test suites where throwing is a failed test
* in app or lib code, type guards are more appropriate
