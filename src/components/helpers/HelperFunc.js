/**
 * 
 * @param {string} - Capitalizes only first letter in a string.
 * 
 */

export function capitalFirstLetter(str) {
    return `${str.toLowerCase().split("")[0].toUpperCase()}${str.slice(1).toLowerCase()}`
}

/**
 * 
 * @param {number} - Returns either unit or units depending on amount.
 * 
 */

 export function pluraliseUnit(number, item) {
    return number > 1 ? ` - ${number} units of ${item}
` : ` - ${number} unit of ${item};
`
 }