import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'

const generateRequestAction = ({ commit }, options) => {
    let { actionTypes = [], requestOptions = {}, extraOptions = {} } = options

    if (!isArray(actionTypes) || actionTypes.length !== 3) {
        throw new TypeError('actionTypes must be a array of three strings')
    }

    const [REQUEST_TYPE, SUCCESS_TYPE, FAIL_TYPE] = actionTypes
    const { beforeRequest, successRequest, failRequest, finishRequest } = extraOptions
    let { request, data } = requestOptions

    if (!isFunction(request)) {
        throw new TypeError('request must be a function')
    }

    const apiWithPromise = (obj) => {
        return new Promise((resolve, reject) => {
            request(obj).then(response => resolve(response.body), response => reject(response))
        })
    }

    (async() => {
        try {
            commit(REQUEST_TYPE)
            beforeRequest && beforeRequest({ commit })
            const responseData = await apiWithPromise(data)
            commit(SUCCESS_TYPE, responseData)
            successRequest && successRequest({ commit })
        } catch (error) {
            commit(FAIL_TYPE, error)
            failRequest && failRequest({ commit })
        } finally {
            finishRequest && finishRequest({ commit })
        }
    })()
}

export default generateRequestAction
