function saturdayFun(string){
    if (string){
        return `This Saturday, I want to ${string}!`
    }
    else {
    return ('This Saturday, I want to roller-skate!');
}
}
function mondayWork(string){
    if (string){ 
        return `This Monday, I will ${string}.`}
    else {
        return 'This Monday, I will go to the office.'
    }
    }
function wrapAdjective(flair){
    return function result (string){
        return `You are ${flair}${string}${flair}!`
    }
    
}
