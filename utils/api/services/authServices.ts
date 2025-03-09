import api from "@/utils/api";
import type { ApiResponse } from "@/utils/api/types/apiResponseType";
import type { SignInResponse } from "@/utils/api/types/authTypes";

export const oauthApi = {
	// OAuth2 로그인 (카카오, 네이버, 구글)
	oauthLogin: async (registrationId: string, code: string, state?: string): Promise<ApiResponse<SignInResponse>> => {
		const response = await api.get<ApiResponse<SignInResponse>>(`/login/oauth2/code/${registrationId}`, {
			params: { code, state },
		});

		return response as unknown as ApiResponse<SignInResponse>;
	},
};



// export const accountApi = {
// 	// 사용자 로그인
// 	login: (data: LoginRequest): Promise<LoginResponse> => api.post("/auth/login", data),

// 	// 사용자 정보 가져오기
// 	getUserInfo: (): Promise<Account> => api.get("/user/me"),

// 	// 로그아웃
// 	logout: (): Promise<void> => api.post("/auth/logout"),
// };

// export const postApi = {
// 	// 게시글 목록 조회
// 	getPosts: (): Promise<Post[]> => api.get("/posts"),

// 	// 게시글 상세 조회
// 	getPost: (id: number): Promise<Post> => api.get(`/posts/${id}`),

// 	// 게시글 작성
// 	createPost: (data: Partial<Post>): Promise<Post> => api.post("/posts", data),
// };
