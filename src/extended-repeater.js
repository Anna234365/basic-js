module.exports = function repeater(str, options) {
    ''+str == 'null' ? str = 'null' : false;
    ''+options.addition == 'null' ? options.addition = 'null' : false;
    ''+options.addition == 'undefined' ? (options.addition = '', options.additionSeparator = '') : false;
    options.additionSeparator == undefined && options.addition != undefined ? options.additionSeparator = '|' : false;
    options.additionRepeatTimes == undefined ? options.additionRepeatTimes = 1 : false;
    options.separator == undefined ? options.separator = '+' : false;
    options.repeatTimes == undefined ? options.repeatTimes = 1 : false;
    
    return str.toString().concat(options.addition.toString().concat(options.additionSeparator)
    .repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length) )
    .concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length);
};