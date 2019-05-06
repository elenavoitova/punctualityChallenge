const limit = 10;
const directions = ['n', 'w', 's', 'e'];

function getRandomDirection() {
    return Math.floor(Math.random() * 4);
}

function getRandomStepsAmount() {
    return Math.floor(Math.random() * limit + 1);
}

function getFilteredDirection(way) {
    return way.filter((element, index, arr) => element !== arr[index + 1]);
}

function getWayApp() {
    let way = [];
    let steps = getRandomStepsAmount();

    for (let i = 0; i < steps; i++) {
        let d = getRandomDirection();

        way.push(directions[d]);
    }

    return getFilteredDirection(way);
}

function getFullWay() {
    let fullWay = getWayApp();

    while (fullWay.length < limit) {
        fullWay = [...fullWay, ...getWayApp()];
    }

    return getFilteredDirection(fullWay).slice(0, limit);
}

function willYouBeAtStartPoint(way) {
    let counter = { n: 0, e: 0, w: 0, s: 0 };

    directions.forEach(direction => {
        counter[direction] = way.filter(step => step === direction).length;
    });

    return counter.n === counter.s && counter.e === counter.w;
}

willYouBeAtStartPoint(getFullWay());
