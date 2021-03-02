# What is this ?

You can find js utility functions here.

## Installation

`npm i js-util-methods`

## How to use ?

```
    import { findAvg } from 'js-util-methods'

    findAvg([12, 13, 14, 15, 16, 17]);
```

### What all utility functions there ?

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
* isEmpty(object | array) => boolean
* sortBy(array, compareType, sortType) => sorted array
