function saturdayFun(string){
    let activity = string;
    if (activity === undefined){
        return `This Saturday, I want to ${'roller-skate'}!`;
    }
    else if (activity === 'bathe my dog'){
        return `This Saturday, I want to ${activity}!`;
    }
}

const mondayWork = function (string){
    let work = string;
    if (work === undefined){
        return `This Monday, I will ${'go to the office'}.`;
    }
    else if (work === 'work from home'){
        return `This Monday, I will ${work}.`;
    }
}
function wrapAdjective(param1 = "*"){
    return function (param2 = "a hard worker") {
        return `You are ${param1}${param2}${param1}!`;
    }
}
wrapAdjective("||")("a dedicated programmer");