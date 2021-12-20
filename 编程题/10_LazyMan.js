class LazyManClass {
    constructor(name) {
        this.queue = []
        console.log(`Hi I am ${name}`)
        setTimeout(() => {
            this.next()
        }, 0)
    }

    sleep(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒`)
                this.next()
            }, time)
        }
        this.queue.push(fn)
        return this
    }

    sleepFirst(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`等待了${time}秒`)
                this.next()
            }, time)
        }
        this.queue.unshift(fn)
        return this
    }

    eat(food) {
        const fn = () => {
            console.log(food)
            this.next()
        }
        this.queue.push(fn)
        return this;
    }

    next() {
        const fn = this.queue.shift()
        fn && fn()
    }
}

function LazyMan(name) {
    return new LazyManClass(name)
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food