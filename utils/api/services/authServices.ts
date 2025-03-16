import api from "@/utils/api";
import type { ApiResponse } from "@/utils/api/types/apiResponseType";
import type { SignInResponse } from "@/utils/api/types/authTypes";

export const oauthApi = {
  // OAuth2 로그인 (카카오, 네이버, 구글)
  oauthLogin: async (registrationId: string, code: string, state?: string): Promise<ApiResponse<SignInResponse>> => {
    const response = await api.get<ApiResponse<SignInResponse>>(`/auth/login/${registrationId}`, {
      params: { code, state },
    });

    return response as unknown as ApiResponse<SignInResponse>;
  },
  signup: async (formData: FormData, registrationId?: string, code?: string): Promise<ApiResponse<{ jobId: string }>> => {
    const response = await api.post<ApiResponse<{ jobId: string }>>(`/auth/signup/${registrationId}/${code}`, formData);
    return response.data;
  },
};