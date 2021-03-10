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
* isEmpty(object | array | null | undefined) => boolean
* sortBy(array, compareType, sortType) => sorted array (orderBy also can be done)
* uniqBy(arr, predicate) => arr
* Ex. `const arr = [
        { name: 'Raj', age: 21 },
        { name: 'Tiwari', age: 20 },
        { name: 'Pujari', age: 20 }
    ]
    uniqBy(arr, 'age') =>
    [
        { name: 'Raj', age: 21 }
        { name: 'Tiwari', age: 20 }
    ],
* groupBy(arr, property) => grouped obj
* Ex. `const arr = [
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
    }`
* deepCopy(obj) => deepcopied Object (Works better than `JSON.parse(JSON.stringify(obj))`)
* deleteObjProperty(obj, property) => obj
* isValidObjProperty(obj, property) => boolean
* isArrHasObject(arr, obj, predicate) => boolean
* isArrHasElement(arr, element) => boolean
