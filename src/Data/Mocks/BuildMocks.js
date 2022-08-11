import { brands, usernames, type } from '../Constants';

function BuildMocks() {
    let result = [];


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }


    for (var i=0; i< 100;i++) {
        let randomItem = {};
        randomItem.username = usernames[getRandomIntInclusive(0, usernames.length-1)];
        randomItem.brand = brands[getRandomIntInclusive(0, brands.length-1)];
        randomItem.type = type[getRandomIntInclusive(0, type.length-1)];
        randomItem.price = getRandomIntInclusive(100, 1000);
        randomItem.key = i;
        randomItem.condition = getRandomIntInclusive(4, 10);
        randomItem.title = `${randomItem.type} ${randomItem.brand}`
        result.push(randomItem);
    }

    return result;
}

export default BuildMocks;