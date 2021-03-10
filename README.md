# What is this ?

Lightweight, usefull, tiny size(<4kb), javascript package for commenly used utility functions.

## Installation

`npm i js-util-methods`

## How to use ?

```
import { findAvg } from 'js-util-methods'

findAvg([12, 13, 14, 15, 16, 17]);
```

* For use in **typescript** projects follow the steps below.
* Create file with name **.d.ts** copy and paste below code in created file.
* `declare module 'js-util-methods';`

## What all utility functions there ?

* findAvg(List of numbers) => number
* isEmpty(object | array | null | undefined) => boolean

```
    isEmpty({}) => true
    isEmpty([]) => true
    isEmpty({ name: 'Pujari', age: 20 }) => false
    isEmpty([1, 2, 3]) => false
```

* sortBy(array, compareType, sortType) => sorted array (orderBy also can be done)

```
    const arr = [
        { name: 'Raj', age: 21 },
        { name: 'Tiwari', age: 20 },
        { name: 'Pujari', age: 20 },
        { name: 'Avi', age: 30 }
    ]
    sortBy(arr, 'name', 'asc') =>
        [
            { name: 'Avi', age: 30 },
            { name: 'Pujari', age: 20 },
            { name: 'Raj', age: 21 },
            { name: 'Tiwari', age: 20 }
        ]
```

* uniqBy(arr, predicate) => arr
  
```
    const arr = [
        { name: 'Raj', age: 21 },
        { name: 'Tiwari', age: 20 },
        { name: 'Pujari', age: 20 }
    ]
    uniqBy(arr, 'age') =>
    [
        { name: 'Raj', age: 21 }
        { name: 'Tiwari', age: 20 }
    ]
```

* groupBy(arr, property) => grouped obj

```
    const arr = [
        { name: 'Raj', age: 21 },
        { name: 'Tiwari', age: 20 },
        { name: 'Pujari', age: 20 }
    ]
    groupBy(arr, 'age') =>
    {
      20: [
        { name: 'Tiwari', age: 20 },
        { name: 'Pujari', age: 20 }
      ],
      21: [{ name: 'Raj', age: 21 }]
    }
```

* deepCopy(obj) => deepcopied Object (Works better than `JSON.parse(JSON.stringify(obj))`)

```
    const a = {
        string: 'string',
        number: 123,
        bool: false,
        nul: null,
        date: new Date(),
        undef: undefined,
        inf: Infinity,
        re: /.*/,
    }

    const b = deepCopy(a);
    b => {
        string: 'string',
        number: 123,
        bool: false,
        nul: null,
        date: new Date(),
        undef: undefined,
        inf: Infinity,
        re: /.*/,
    }
```

* deleteObjProperty(obj, property) => obj
* isValidObjProperty(obj, property) => boolean
* isArrHasElement(arr, element) => boolean

```
    isArrHasElement([12, 34, 'pujari'], 'pujari') => true
    isArrHasElement([12, 34, 'pujari'], 50) => false
```

* isArrHasObject(arr, obj, predicate) => boolean

```
    isArrHasObject(arr, { name: 'Tiwari', age: 20 }, age) => true
    isArrHasObject(arr, { name: 'Tiwari', age: 30 }, age) => false
```

* toCamelCase(string) => string
* getPercentage(totalValue, value) => number
* formatPriceINR(price, isDecimalRequired = true, isRSRequried = true) => string
* getMobileFormat(valid mobile number(123 4567 890)) => string in format (+91 123 4567 890)
* getFirstElement(list of elements) => single object
* calculateDiscountPercentage(price, discountedPrice) => number
* calculatePriceFromDiscount(price, discountPercent) => number
* getDobFromAge(age in number) => DOB in Date format
* getAgeFromDob(DOB in Date format) => age in number
* capitalizeFirstLetter(string) => string
