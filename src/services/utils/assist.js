function findComponentUpward(context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name

    while (parent && (!name || componentName !== name)) {
        parent = parent.$parent
        if (parent) {
            name = parent.$options.name
        }
    }

    return parent
}

function typeOf(obj) {
    const toString = Object.prototype.toString
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return map[toString.call(obj)]
}

// deepTraverse
function deepTraverse(data, cb) {
    const t = typeOf(data)
    let o

    if (t === 'array') {
        o = []
    } else if (t === 'object') {
        cb && cb(data)
        o = {}
    } else {
        return data
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepTraverse(data[i], cb))
        }
    } else if (t === 'object') {
        for (let i in data) {
            o[i] = deepTraverse(data[i], cb)
        }
    }
    return o
}

export {
    findComponentUpward,
    deepTraverse,
}