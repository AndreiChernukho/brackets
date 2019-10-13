module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    }

    let stack = [];

    let getConfigByOpeningBracket = function (bracket) {
        return bracketsConfig.find(element => bracket == element[0]);
    }

    let isOpeningBracket = function (bracket) {
        return getConfigByOpeningBracket(bracket) != undefined;
    }

    let getConfigByClosingBracket = function (bracket) {
        return bracketsConfig.find(element => bracket == element[1]);
    }

    let isClosingBracket = function (bracket) {
        return getConfigByClosingBracket(bracket) != undefined;
    }

    for (bracket of str) {
        let isPairBrackets = isOpeningBracket(bracket) && isClosingBracket(bracket);

        if (isOpeningBracket(bracket) && !isClosingBracket(bracket) || (isPairBrackets && stack[stack.length - 1] != bracket)) {
            stack.push(bracket);
        }
        else {
            let openingBracket = stack.pop();
            let config = getConfigByClosingBracket(bracket);

            if (openingBracket != config[0]) {
                return false;
            }
        }
    }

    return stack.length == 0;
}
