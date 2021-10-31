Number.prototype.add = function(i){
    return this.valueOf() + i
}

Number.prototype.minus = function(i){
    return this.valueOf() - i
}


console.log((5).add(2).minus(3))