// Code your solution in this file!
const headQuarters = 42;

function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - headQuarters);
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}

function distanceTravelledInFeet(pickUp, headQuarters) {
    return Math.abs(pickUp - headQuarters) * 264;
}

function calculatesFarePrice(pickUp, headQuarters) {
    const distance = distanceTravelledInFeet(pickUp, headQuarters);
    if (distance <= 400) {
        return 0;
    }  else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}