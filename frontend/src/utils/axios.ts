import axios from 'axios'
import { getState } from '@/store/store'

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    (config) => {
        const { accessToken } = getState();

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        // Do something with response data
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('accessToken')
            // logout
            // redirectionez pe login
            document.location.href = '/'
            // sters din local storage
    }
        return Promise.reject(error)
    }
)

export default instance