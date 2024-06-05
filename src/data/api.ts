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

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  avatar_url?: string,
  persona?: Persona
): Promise<UserResponse> => {
  try {
    const userObj = {
      name,
      email,
      password,
      avatar_url,
      persona,
    };

    const response = await axios.post<UserResponse>('/users', userUserObj);
    const loginResponse = await loginUser(email, password);

    // Instead of localStorage, consider using cookies with httpOnly flag
    document.cookie = `token=${loginResponse.data.access_token};path=/;secure;httpOnly`;

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // Throw or handle more specific AxiosError
    if (axiosError.response) {
      console.error(`Registration failed with status: ${axiosError.response.status}`);
      throw new Error(`Failed to register user: ${axiosError.response.statusText}`);
    } else {
      console.error(axiosError.message);
      throw new Error(`Failed to register user: ${axiosError.message}`);
    }
  }
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

export const fetchUser = async () => {
    try {
        const response = await axiosInstance.get('/users/me');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};
export const updateUser = async (user: any) => {
    try {
        console.log('Updating user:', user);  // 디버그용 로그
        const response = await axiosInstance.put('/users/me', user);
        return response.data;
    } catch (error) {
        console.error('Failed to update user:', error);  // 디버그용 로그
        throw new Error('Failed to update user');
    }
};