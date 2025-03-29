import api from '@/utils/api';
import type { ApiResponse } from '@/utils/api/types/apiResponseType';
import type { PictureResponse } from '@/utils/api/types/pictureTypes';

export const pictureApi = {
	getDummyPictures: async (page: number, size: number): Promise<ApiResponse<PictureResponse>> => {
		const response = await api.get<ApiResponse<PictureResponse>>(`/api/dummy/picture`, {
			params: { page, size },
		});
		return response.data;
	},
};
