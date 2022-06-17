const quotes = [
  {
    quote: "계획없는 꿈은 한낱 꿈에 불과하다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "인생은 끊임없는 반복, 반복에 지치지않는 자가 성취한다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "인생은 경험해가는 여행이지 풀어야하는 문제가 아니란다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote:
      "늘 명심하라. 해내고 말겠다는 너의 결심이 다른 어떤 것보다 중요하다는 사실을 ",
    author: "오늘도 화이팅 !",
  },
  {
    quote:
      "인생이 살 만한 가치가 있다고 믿어라. 그래야 가치있는 삶을 살 수 있다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote:
      "어느 것도 우연으로 된 것은 없다. 그것은 모두 노력에 의해 이루어졌다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "오늘이 당신 생의 마지막 날이라도 지금 하려는 일을 하고 싶은가? ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "생각하는 대로 살지 않으면 사는대로 생각하게 될 것이다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "어디로 향하는지 모른다면 빨리 가는 것은 의미가 없다. ",
    author: "오늘도 화이팅 !",
  },
  {
    quote: "서두르지 않으나 쉬지 않고 ",
    author: "오늘도 화이팅 !",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQutoe = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQutoe.quote;
author.innerText = todaysQutoe.author;
