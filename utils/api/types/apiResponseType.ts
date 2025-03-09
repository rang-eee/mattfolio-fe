export interface ApiResponse<T> {
	resultCode: number;  // API 결과 코드 (성공: 200, 오류: 그 외)
	resultMessage: string; // API 결과 메시지
	data: T | null; // 응답 데이터 (없을 수도 있음)
}
