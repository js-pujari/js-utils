const findAvg = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

const toCamelCase = (str) => {
    return str
        .replace(/\s(.)/g, ($1) => $1.toUpperCase())
        .replace(/\s/g, ' ')
        .replace(/^(.)/, ($1) => $1.toUpperCase());
};

const getPercentage = (total, value) => {
    return (total && value) ? Math.round((value / total) * 100) : 0;
};

const formatPriceINR = (price, isDecimalRequired = true, isRSRequried = true) => {
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

const getMobileFormat = (mobile) => {
    if (mobile && typeof mobile === 'string') {
        mobile = mobile.toString();
        return `+91 ${mobile.substr(0, 3)} ${mobile.substr(3, 4)} ${mobile.substr(7, 3)}`;
    }
    return '';
};

const getFirstElement = (array) => {
    if (array && array.length > 0) {
        return array[0];
    } else {
        return {};
    }
};

module.exports = [findAvg, toCamelCase, getPercentage, formatPriceINR, getMobileFormat, GetFirstElement];
