const images = ["연보라.jpeg", "찐부농.jpeg", "하늘.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

// 자바스크립트로 이미지 엘리먼트 생성해주기
const bgImg = document.createElement("img");
// 이미지 경로 설정
bgImg.src = `img/${chosenImg}`;
// body에 추가
document.body.appendChild(bgImg);
