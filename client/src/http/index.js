import axios from "axios"

export const API_URL = "https://nwxrfz36-4000.uks1.devtunnels.ms/api"

export const $api = axios.create(({
    withCredentials: true,
    baseURL: API_URL
}))

export const $apiBearer = axios.create(({
    withCredentials: true,
    baseURL: API_URL
}))

$apiBearer.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$apiBearer.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    try {
        if (error.response.status == 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            const response = await $api("/refresh")
            localStorage.setItem('token', response.data.accessToken)
            $apiBearer.request(originalRequest)
        }
    } catch (e) {
        console.log("User is not authorized")
    }

    throw error
})