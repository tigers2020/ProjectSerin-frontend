import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
    },
    withCredentials: true,
});

// 요청 인터셉터 설정: 토큰이 있는 경우 헤더에 포함
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const registerUser = async (name: string, email: string, password: string) => {
    return axiosInstance.post(`/users/`, { name, email, password });
};

export const loginUser = async (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    return axiosInstance.post(`/token`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
};

export const logoutUser = () => {
    localStorage.removeItem('token');
};
