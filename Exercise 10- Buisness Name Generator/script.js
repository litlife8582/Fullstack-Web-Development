const adj={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

const name={
    1:"Engine",
    2:"Food",
    3:"Garments"
}

const other={
    1:"Bros",
    2:"limited",
    3:"Hub",
}

function randNumGen(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}


console.log(adj[randNumGen(1,3)]+name[randNumGen(1,3)]+other[randNumGen(1,3)]);