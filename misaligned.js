const {expect} = require('chai');
const {assert} = require('chai');
const {MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES} = require("./colorConstants");

function get_color_map(majorColors,minorColors) {
    let colorMap = [];
    for (let i = 0; i < majorColors.length; i++) {
      for (let j = 0; j < minorColors.length; j++) {
        colorMap.push({
          colorCode: i * 5 + j,
          majorColor: majorColors[i],
          minorColor: minorColors[j],
        });
      }
    }
    return colorMap;
  }
  
  function print_color_map(colorMaps) {
    colorMaps.forEach((colorMap) => {
      console.log(`${colorMap.colorCode}` + | + `${colorMap.majorColor}` + | + `${colorMap.minorColor}`);
    });
  }

result = get_color_map(MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES);
print_color_map(result);

expect(result.length).equals(25, 'result length should be 25');
expect(result[0].colorCode).equals(1, "Color code  start from 1");
assert.lengthOf(result, 25);
console.log('All is well (maybe!)');
