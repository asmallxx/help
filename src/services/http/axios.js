import Vue from 'vue'
import axios from 'axios'
import apiSign from '@ebag/websign-new'

let accessToken = ''
let teacherId = ''


export function setTokenAndTeacherId({
    token,
    id
}) {
    accessToken = token
    teacherId = id
}

const config = {
    crossDomain: true,
    validateStatus(status) {
        return status >= 200 && status < 500
    }
}

const _axios = axios.create(config)

_axios.interceptors.request.use(originConfig => {
    // token 和 teacherId 不能为空
    if (!accessToken || !teacherId) {
        throw new Error('accessToken or teacherId is empty')
    }

    const reqConfig = {
        ...originConfig
    }

    // 容错处理
    if (!reqConfig.url) {
        throw new Error({
            source: 'axiosInterceptors',
            message: 'request need url',
        })
    }

    // 默认使用 get 请求
    if (!reqConfig.method) {
        reqConfig.method = 'get'
    }

    // 大小写
    reqConfig.method = reqConfig.method.toLowerCase()

    // 防止字段用错
    if (reqConfig.methods === 'get') {
        if (!reqConfig.params) {
            reqConfig.params = reqConfig.data || {}
        }
    } else if (reqConfig.method === 'post') {
        if (!reqConfig.data) {
            reqConfig.data = reqConfig.params || {}
        }
    }

    // api 签名
    Reflect.set(reqConfig.params, 'F_teacher_id', teacherId)
    Reflect.set(reqConfig.params, 'F_accesstoken', accessToken)
    const sign = apiSign.sign(reqConfig.params)
    Reflect.set(reqConfig.params, 'F_sign', sign)

    return reqConfig
})

_axios.interceptors.response.use(async (res) => {
    if (res.status.toString().charAt(0) !== '2') {
        throw new Error('request error')
    }

    if (res.data.F_responseNo === 10000) {
        return res.data
    } else {
        // eslint-disable-next-line no-console
        console.log(res.data)
    }
}, error => {
    // eslint-disable-next-line no-console
    console.log(error)
})

Plugin.install = function (Vue) {
    Vue.axios = _axios
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    })
}

if (!Vue.axios) {
    Vue.use(Plugin)
}

// 导出常用函数

export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params,
    })
}

export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params
    })
}

export function put(url, data = {}, params = {}) {
    return _axios({
        method: 'put',
        url,
        params,
        data,
    })
}

export function _delete(url, params = {}) {
    return _axios({
        method: 'delete',
        url,
        params
    })
}

export default _axios