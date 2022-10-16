/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

    let newArr = [];
    let arr = str.split('');

    for (let i = 1; i <= arr.length - 1; i++) {
        let j = 1;
        if (arr[i] === arr[i - 1]) {
            if (newArr.length > 0 && newArr[newArr.length - 1][1] === arr[i]) {
                newArr[newArr.length - 1] = [newArr[newArr.length - 1][0] + 1, arr[i]]
            } else {
                newArr.push([2, arr[i]]);
            }
        } else {
            if (i === 1) {
                newArr.push([j, arr[i - 1]]);
            }
            newArr.push([j, arr[i]]);
        }

    }
    return newArr.join('').replace(/[\s.,%1]/g, "");
}

module.exports = {
    encodeLine
};
