export interface Picture {
  date: string;  // 날짜 형식 (YYYY-MM-DD)
  pictureId: string;  // 고유한 사진 ID
  registerPhotoUrl: string;  // 등록된 사진의 URL
  registerPhotoId: string;  // 등록된 사진의 ID
  pictureName: string;  // 사진 이름
  registerName: string;  // 등록자 이름
}
export interface PictureResponse {
  more : boolean,
  list : Picture[] // 등록자 이름
}
