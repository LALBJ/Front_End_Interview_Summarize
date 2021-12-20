function _new(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, args);
    return ret instanceof Object ? ret : obj;
}

var Dog = function(name) {
    this.name = name
}
Dog.prototype.bark = function() {
    console.log('wangwang') 
}
Dog.prototype.sayName = function() {
    console.log('my name is ' + this.name)
}

var simao = _new(Dog, 'simao')
simao.bark()
simao.sayName()
console.log(simao instanceof Dog)