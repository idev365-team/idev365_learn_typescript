interface SquareConfig {
    color?:string,
    width?:number,
    [propName:string]:any;
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare = {color:"white",area:100}
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width*config.width
    }
    return newSquare
}

let mySquare = createSquare({coluor:'black'})
console.log(mySquare)