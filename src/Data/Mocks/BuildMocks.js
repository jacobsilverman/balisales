import { brands, usernames, types } from '../Constants';

function BuildMocks() {
    let result = [];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    for (var i=0; i< 100;i++) {
        let randomItem = {};
        randomItem.type = types[getRandomIntInclusive(0, types.length-1)];
        randomItem.brand = brands[getRandomIntInclusive(0, brands.length-1)];
        randomItem.condition = getRandomIntInclusive(4, 10);
        randomItem.title = `${randomItem.type} ${randomItem.brand}`
        randomItem.price = getRandomIntInclusive(100, 1000);
        randomItem.username = usernames[getRandomIntInclusive(0, usernames.length-1)];
        randomItem.key = i;
        result.push(randomItem);
    }

    return result;
}

export default BuildMocks;