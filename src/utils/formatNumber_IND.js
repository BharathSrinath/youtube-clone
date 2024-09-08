export const formatNumber = (num) => {
    const format = (value, suffix) => {
        const formattedValue = parseFloat(value).toFixed(1);
        return formattedValue.endsWith('.0') ? `${parseInt(formattedValue)}${suffix}` : `${formattedValue}${suffix}`;
    };

    if (num < 1000) {
        return num.toString();
    } else if (num >= 1000 && num < 10000) {
        return format(num / 1000, 'k');
    } else if (num >= 10000 && num < 100000) {
        return format(num / 1000, 'k');
    } else if (num >= 100000 && num < 1000000) {
        return format(num / 100000, 'L');
    } else if (num >= 1000000 && num < 10000000) {
        return format(num / 100000, 'L');
    } else if (num >= 10000000 && num < 100000000) {
        return format(num / 10000000, 'Cr.');
    } else {
        return format(num / 10000000, 'Cr.');
    }
};
