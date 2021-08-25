/**
 * write a type that describes a valid JSON object, so it must be an
 * - object
 * - array
 * - number
 * - string
 * 
 * or, one of the following three literal names:
 * - false
 * - true
 * - null
 */

type Primitive = string | number | boolean | null;

// use an index signature
type JSONObject = { [k: string]: JSONValue };
// recursive type based on JSONValue
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

// POSITIVE test cases
isJSON('hello');
isJSON([4, 8, 15, 16, 23, 42]); // ha ... can tell when this was created!
isJSON({ greeting: 'hello' });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({
  a: {
    b: [2, 3, 'foo'],
  },
});

// NEGATIVE test cases
// @ts-expect-error
isJSON(() => '');

// @ts-expect-error
isJSON(class {});

// @ts-expect-error
isJSON(isJSON);




