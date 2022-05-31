const {expect} = require('chai');
const {MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES} = require("./colorConstants");

function print_color_map(majorColors,minorColors) {
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

result = print_color_map(MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES);
expect(result).equals(25);
console.log('All is well (maybe!)');
