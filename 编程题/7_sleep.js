// Promise
const sleep = time => {
    return new Promise((resolve => setTimeout(resolve, time)))
}

sleep(1000).then(() => {
    console.log(1)
})

// Generator
function* sleepGenerator(time) {
    yield new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    })
}

sleepGenerator(1000).next().value.then(() => {console.log(1)})


// async
// function sleep(time) {
//     return new Promise(resolve => setTimeout(resolve, time))
// }

async function output() {
    let out = await sleep(1000);
    console.log(1)
    return out
}

output()

// ES5
function sleepES5(callback, time) {
    setTimeout(callback, time)
}

function output() {
    console.log(1)
}

sleepES5(output, 1000)