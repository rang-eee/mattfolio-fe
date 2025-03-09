import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import type { ApiResponse } from "@/utils/api/types/apiResponseType";

const api: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_AUTH_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// 요청 인터셉터: 모든 요청에 자동으로 인증 토큰 추가
api.interceptors.request.use(
	(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
		const token = localStorage.getItem("access_token");
		if (token && token !== 'undefined') {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// 응답 인터셉터: resultCode 기반 공통 처리
api.interceptors.response.use(
	(response: AxiosResponse<any>) => {
		const res = response.data;
		return res;
	},
	(error) => {
		if (error.response) {
			console.error(`API 요청 실패: ${error.response.status}`, error.response.data);
		} else {
			console.error("API 요청 실패:", error.message);
		}
		return Promise.reject(error);
	}
);

export default api;
