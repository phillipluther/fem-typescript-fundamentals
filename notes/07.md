# 07 :: Index Signatures / Object QA

> Notes/Talking Points

## Index Signatures

* need to store a type for dictionaries; values of consistent type accessible by key
* a phone book/directory is an example

```
const phoneNumbers = {
  home: {
    country: '+1',
    area: '415',
    number: '555-1234',
  },
  work: {
    country: '+1',
    area: '312',
    number: '555-8888',

  },
  mobile: {
    country: '+1',
    area: '415',
    number: '555-9999',
  }
}
```

* need an index signature for the key
  * very much like box `[]` notation for dynamic keys in objects

```
// to type it ...
const phoneNumbers: {
  [key: string]: {
    country: string;
    area: string;
    number: string;
  }
} = {};
```

## Object QA

quick aside, don't you hate how the QA from the previous section is grouped with the _next_ module? this object q/a thing should have been appended to the Object module, not randomly inserted into Index Sigs. feedback for FEM

there was a good question about extra props i appended to the previous section
