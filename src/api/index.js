//  请求测试
import request from "../utils/request"

export const getTestapi = () => {
    return request({
        method: 'GET',
        url: "/"
    })
}

export const getTestmock = () => {
    return request({
        method: 'GET',
        url: "/new/article"
    })
}


export const getNavlist = () => {
    return request({
        method: 'GET',
        url: "/nav/list"
    })
}

/**
 * 获取指数信息
 */
export const getQuotes = (params) => {
    return request({
        method: "GET",
        url: "/quote",
        // params选项是用来配置GET方法的query参数，?xxx=xxx&key=value
        params
    })
}

/**
 * 
 * 获取列表
 * 
 */
export const getArticles = params => {
    return request({
        method: "GET",
        url: "/articles",
        params
    })
}

/**
 * 
 * 股票榜单
 * 
 */
export const getStocks = params => {
    return request({
        method: 'GET',
        url: '/stocks',
        params
    })
}

/**
 * 
 * banner图
 * 
 */
export const getFundBanner = () => {
    return request({
        method: "GET",
        url: "/fund/banner"
    })
}

/**
 * 
 * 详细指数
 * 
 */
export const getFundtab = () => {
    return request({
        method: "GET",
        url: "/fund/tablist"
    })
}

//登录接口,提交账号和密码到服务器
export const postLogin = (data) => {
    return request({
        method: "POST",
        url: "/login",
        data
    })
}