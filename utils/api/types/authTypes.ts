// 로그인 응답 타입
export interface SignInResponse {
	authProvider?: "kakao" | "naver" | "google";
	kakaoUserInfo?: KakaoUserInfo;
	naverUserInfo?: NaverUserInfo;
	googleUserInfo?: GoogleUserInfo;
	accessToken?: string;
	refreshToken?: string;
	needSignup?: boolean; // 추가 회원가입이 필요한 경우
}

// ✅ 카카오 사용자 정보 타입 (백엔드의 `KakaoUserInfo` DTO 기반)
export interface KakaoUserInfo {
	id: number; // Long 타입
	kakaoAccount: KakaoAccount;
}

export interface KakaoAccount {
	email: string;
	profile: KakaoProfile;
}

export interface KakaoProfile {
	nickname: string;
	profileImageUrl: string;
}

// ✅ 네이버 사용자 정보 타입 (백엔드의 `NaverUserInfo` DTO 기반)
export interface NaverUserInfo {
	resultcode: string;
	message: string;
	response: NaverAccount;
}

export interface NaverAccount {
	id: string;
	nickname: string;
	name: string;
	email: string;
	gender: string;
	age: string;
	birthday: string;
	profileImage: string;
	birthyear: string;
	mobile: string;
}

// ✅ 구글 사용자 정보 타입 (백엔드의 `GoogleUserInfo` DTO 기반)
export interface GoogleUserInfo {
	id: string;
	email: string;
	name: string;
	picture: string;
}
