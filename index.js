export const findAvg = (arr) => {
    return (arr.reduce((p, c) => p + c, 0) / arr.length);
}

export const toCamelCase = (str) => {
    return str
        .replace(/\s(.)/g, ($1) => $1.toUpperCase())
        .replace(/\s/g, ' ')
        .replace(/^(.)/, ($1) => $1.toUpperCase());
};

export const getPercentage = (total, value) => {
    return (total && value) ? Math.round((value / total) * 100) : 0;
};

export const formatPriceINR = (price, isDecimalRequired = true, isRSRequried = true) => {
    if (isDecimalRequired && isRSRequried) {
        return 'Rs. ' + (price || 0).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    } else if (isDecimalRequired && !isRSRequried) {
        return (price || 0).toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,');
    } else if (!isDecimalRequired && isRSRequried) {
        return 'Rs. ' + (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
    } else if (!isDecimalRequired && !isRSRequried) {
        return (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
    } else {
        return 'Rs. ' + (price || 0).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
    }
};

export const getMobileFormat = (mobile) => {
    if (mobile && typeof mobile === 'string' && typeof mobile === 'number') {
        mobile = String(mobile);
        return `+91 ${mobile.substr(0, 3)} ${mobile.substr(3, 4)} ${mobile.substr(7, 3)}`;
    }
    return 'abcd';
};

export const getFirstElement = (array) => {
    if (array && array.length > 0) {
        return array[0];
    } else {
        return {};
    }
};

export const calculateDiscountPercentage = (price, discountedPrice) => {
    price = price < 0 || price === undefined ? 0 : price;
    discountedPrice = discountedPrice === undefined ? 0 : discountedPrice;
    return Math.round(((price - discountedPrice) / price) * 100 || 0);
};

export const calculatePriceFromDiscount = (price, discountPercent) => {
    discountPercent = discountPercent < 0 || discountPercent === undefined ? 0 : discountPercent > 100 ? 100 : discountPercent;
    price = price === undefined ? 0 : price;
    return Math.round((price - ((discountPercent / 100) * price)) || 0);
};

export const getDobFromAge = (age) => {
    const d = new Date();
    const curYear = d.getFullYear();
    return new Date(d.setFullYear(curYear - age));
};
export const getAgeFromDob = (dob) => {
    const cd = new Date();
    const d = new Date(dob);
    return cd.getFullYear() - d.getFullYear();
};
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isEmpty = (obj) => {
    if (obj && !Array.isArray(obj)) {
        return (Object.keys(obj).length > 0) ? false : true;
    } else if (obj && Array.isArray(obj)) {
        return obj.length > 0 ? false : true;
    } else {
        return true
    }
};
export const sortBy = (arr, compareType, sortType) => {
    if (!arr || (arr && !arr.length)) {
        return [];
    }
    return arr.sort((a, b) => {
        let idx;
        if (a[compareType] && b[compareType]) {
            if (sortType && sortType === 'desc') {
                (a[compareType] < b[compareType]) ? idx = 1 : (a[compareType] > b[compareType]) ? idx = -1 : idx = 0;
            } else {
                (a[compareType] > b[compareType]) ? idx = 1 : (a[compareType] < b[compareType]) ? idx = -1 : idx = 0;
            }
        } else {
            if (sortType && sortType === 'desc') {
                (a[compareType] && !b[compareType]) ? idx = 1 : (!a[compareType] && b[compareType]) ? idx = -1 : idx = 0;
            } else {
                (a[compareType] && !b[compareType]) ? idx = -1 : (!a[compareType] && b[compareType]) ? idx = 1 : idx = 0;
            }
        }
        return idx;
    });
};

export const uniqBy = (arr, predicate) => {
    if (arr && Array.isArray(arr)) {
        const callback = typeof predicate === 'function' ? predicate : (o) => o[predicate];

        return [...arr.reduce((map, item) => {
            const key = (item === null || item === undefined) ?
                item : callback(item);

            map.has(key) || map.set(key, item);

            return map;
        }, new Map()).values()];
    } else {
        return arr;
    }

};

export const isArrHasElement = (arr, element) => {
    if (Array.isArray(arr) && element)
        return arr.indexOf(element) >= 0;
    return false
}

export const isArrHasObject = (arr, obj, predicate) => {
    if (Array.isArray(arr) && obj && typeof obj === 'object' && !isEmpty(obj) && predicate)
        return arr.findIndex((item) => item[predicate] && obj[predicate] && item[predicate] === obj[predicate]) >= 0;
    return false
}

export const groupBy = (arr, property) => {
    if (Array.isArray(arr) && property) {
        return arr.reduce((result, obj) => {
            var key = obj[property];
            if (!result[key]) {
                result[key] = [];
            }
            result[key] = [...result[key], obj];
            return result;
        }, {});
    } else {
        return arr;
    }
}

export const isValidObjProperty = (obj, property) => {
    if (!obj.hasOwnProperty(property) || !obj[property])
        return false
    return true;
}

export const deleteObjProperty = (obj, property) => {
    delete obj[property];
    return obj
}

export const deepCopy = (obj) => {
    if (null == obj || "object" != typeof obj || obj instanceof RegExp) return obj;
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
        }
        return copy;
    }
}