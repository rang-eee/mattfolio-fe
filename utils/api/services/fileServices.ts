import api from "@/utils/api";
import type { ApiResponse } from "@/utils/api/types/apiResponseType";
import type { AxiosProgressEvent } from "axios";

export const fileApi = {
  // 업로드 요청 - jobId를 반환한다고 가정
  uploadFiles: async (
    formData: FormData,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): Promise<ApiResponse<{ jobId: string }>> => {
    const response = await api.post<ApiResponse<{ jobId: string }>>(`/api/photo/upload`, formData, {
      onUploadProgress,
    });
    return response.data;
  },

  // 진행률 조회 API (jobId 기반)
  getProgress: async (jobId: string): Promise<ApiResponse<number>> => {
    const response = await api.get<ApiResponse<number>>(`/api/photo/progress`, {
      params: { jobId },
    });
    return response.data;
  },
};
