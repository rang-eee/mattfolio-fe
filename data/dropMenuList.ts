const randomTitles = [
  '나의 찍힌 사진 5장이 추가 되었습니다',
  '새로운 사진이 업로드 되었습니다',
  '촬영된 사진이 갤러리에 추가되었습니다',
  '방금 촬영한 사진을 확인해보세요!',
  '새로운 사진 앨범이 생성되었습니다',
]

const randomLocations = [
  '강남역 스타벅스에서',
  '0430 맽랜드 광화문에서',
  '홍대 거리에서',
  '한강 공원에서',
  '부산 해운대에서',
]

const randomTimes = ['5분 전', '1시간 전', '3시간 전', '6시간 전', '하루 전']

export const DropMenuList = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: randomTitles[Math.floor(Math.random() * randomTitles.length)],
  strongText: randomLocations[Math.floor(Math.random() * randomLocations.length)],
  date: randomTimes[Math.floor(Math.random() * randomTimes.length)],
  image:
    'https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/e78e67a9-3901-416f-9d84-163bd4ed7b8b.jpg',
}))
