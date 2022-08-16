// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper = '*'){
    return function (special = "special"){
        return `You are ${wrapper}${special}${wrapper}!`;
    }
}
