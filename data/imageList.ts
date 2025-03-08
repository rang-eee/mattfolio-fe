const imageSources = [
  'https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/76e00a9c-7d4e-4028-9484-ec21c49e00d4.jpg',
  'https://www.apparelnews.co.kr/upfiles/manage/202010/fec559517a1bd71b6ffc3d4428401c07.jpg',
  'https://marathonhandbook.com/wp-content/uploads/2022/10/Running-Coach-Certification.jpg',
  'https://kineticfix.com/wp-content/uploads/2017/05/is3a9301_native_600.jpg?w=640g',
  'https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/8/icixmd8mxbs961tfqimk.jpeg',
  'https://as1.ftcdn.net/jpg/02/51/13/00/1000_F_251130019_OH9dIOh3l34Pu780AHLkckmNiM2Lkcjz.jpg',
  'https://fpost.co.kr/board/data/file/special/2083791166_E5VOtx1y_1f8d7381ad16c6f8b131523bcb5fbb125fd1ad05.jpg',
  'https://lh5.googleusercontent.com/proxy/0xrKIv-f9g2NVlHjwC0MDxDWf1kGdS0r5pqroy56R33URtcBOVCQlrTbJ9UTwlPWXzTQipSVsaA5GzQxH7fFvRGfWcms3U4BnLPx8h67_xe_PEA19LhZUd3Xxoo5zI-6LPk8WnUx99rZ4CuvWLCHMv6ugRV7ZwuWii_SukTr5bgJKBLhvHW831Ku_Covexs7tLQqXGvW3VFungzEA89mwwU5g4I0mwyL1mq9pRWSDK8j',
  'https://pimg.mk.co.kr/news/cms/202409/27/news-p.v1.20240926.701dcdb47eb24cc4b10ac7cd8be2ccb1_R.jpg',
  'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/c13d3272-66a8-4b73-bf90-b386b1bac95b/%EC%99%84%EB%B2%BD%ED%95%9C-%EB%9F%AC%EB%8B%9D%EC%9D%84-%EC%99%84%EC%84%B1%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95.jpg',
  'https://blog.mealligram.com/wp-content/uploads/2024/03/1.jpg',
  'https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/8/icixmd8mxbs961tfqimk.jpeg',
]

const authors = ['MATTFOLIO', 'RUNNERX', 'JANE DOE', 'JOHN SMITH', 'SPORTY123']
const locations = [
  '서울 강남',
  '서울 홍대',
  '서울 신촌',
  '서울 잠실',
  '서울 여의도',
  '부산 해운대',
  '부산 서면',
  '대구 동성로',
  '대전 유성',
  '광주 충장로',
]

const getRandomDate = (): string => {
  const startDay = 10 //
  const day = startDay + Math.floor(Math.random() * 14)
  return `4월 ${day}일`
}

interface ImageItem {
  id: number
  src: string
  location: string
  profileImage: string
  author: string
}

export const ImageList: ImageItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  src: imageSources[Math.floor(Math.random() * imageSources.length)],
  location: `${getRandomDate()} ${locations[Math.floor(Math.random() * locations.length)]}`,
  profileImage:
    'https://www.harpersbazaar.co.kr/resources/online/online_image/2024/10/02/e78e67a9-3901-416f-9d84-163bd4ed7b8b.jpg',
  author: authors[Math.floor(Math.random() * authors.length)],
}))
