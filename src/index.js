module.exports = function toReadable (number) {

const simpleDig = 'zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(",");
const doubleDig = ',,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',');

const firstSumbol = number % 10;
const secondSymbol = Math.floor(number / 10 % 10);
const thirdSymbol = Math.floor(number / 100);

if (number < 20) {

    return simpleDig[number];

}; if (number < 100) {

    return doubleDig[secondSymbol] + (firstSumbol? " " + simpleDig[firstSumbol] : "");

}; if (number < 1000) {

    return simpleDig[thirdSymbol] + " hundred" + (number % 100 === 0? '' : ' ' + toReadable(number % 100));
}

};
