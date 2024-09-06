export const formatNumber = (num) => {
    const number = Number(num);
    if (isNaN(number)) return 'Views not available';
    return number.toLocaleString('en-IN');
}