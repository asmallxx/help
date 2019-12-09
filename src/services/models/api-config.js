import {
    get
} from '@/services/http/axios'
import domain from '@/domain'

const baseUrl = domain.dreamEbagSupportCenter.domain

export default class HelpCenter {
    //记得改回来
    static async getHelpType() {
        return await get(baseUrl + '/v1/help/type')
    }
    //写出相对应获取资源的方法
    static async getVideoItem(data) {
        return await get(baseUrl + '/v1/help/videoItem', data)
    }
    static async getVideo(data) {
        return await get(baseUrl + '/v1/help/video', data)
    }
    static async getQuestion(data) {
        return await get(baseUrl + '/v1/help/question', data)
    }
}