function sumAll(scores:number[][]){
    var sum = 0;
    for(let i=0;i<scores.length;i++){
        var row = scores[i];
        console.log("row-->i->"+i,row)
        for(let i=0;i<row.length;i++){
            var column = row[i]
            sum+=column;

            console.log("column-->i->"+i,column)
        }
    }
    return sum;
}
var scores:number[][]=[
    [1,2,3],
    [4,5,6],
]
console.log("sumAll->",sumAll(scores))