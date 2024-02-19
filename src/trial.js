function allNewDice(){
    const arr=[];
    for(let i=0;i<10;i++){
        const rand=Math.floor(Math.random()*7);
        arr.push(rand);
    }
    return arr;
}
console.log(allNewDice())