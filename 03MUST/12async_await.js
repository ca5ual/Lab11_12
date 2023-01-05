
//funkcja promice
function promices () {
    const succesfullPromise = timeout (100).then (result => `success : ${result}`);
    const failingPromise = timeout (200, true).then (null, error =>
        Promise.reject (`niepowiedzenie: ${error}`),
        )
        const recoveredPromise = timeout (300, true).then (null, error =>
            Promise.resolve (`nie powiodlo sie i odzyskano: ${error}`),
            )
            succesfullPromise.then (log, logError)
            failingPromise.then(log, logError)
            recoveredPromise.then (log, logErrpr)
    }

//funckcja async-await
    function asyncAwaits () {
    async function succesfullAsyncAwait () {
        const result = await timeout (100)
        return `sukces: ${result}`
    }
    async function failedAsyncAwait () {
        const result = await timeout (200, true)
        return `nie powiodlo sie: ${result}`
    }
    async function recoveredAsyncAwait () {
        let result
        try {
            result = await timeout (300, true)
            return `nie powodlo sie: ${result}`
        } catch (error) {
            return `nie powiodlo sie o odzyskano: ${error}`
        }
    }
succesfullAsyncAwait().then (log, logError)
failedAsyncAwait().then (log, logError)
recoveredAsyncAwait().then (log, logError)
}

function log (...args) {
    console.log (...args)
}
function logError (...args) {
    console.error (...args)
}

//to jest najwazniejszy element wszystkich asynchroncznych dzialan
function timeout(duration = 0, shouldReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject (`rejected after ${duration}ms`)
            } else {
                resolve('resolved after ${duration}ms')
            }
        }, duration)
    })
}