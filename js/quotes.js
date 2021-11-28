const quotes = [{
    quote: "나는 행복하기로 결정했다.\n건강에 좋기 때문이다.",
    author: "- 볼테르(Voltaire) -",
},
{
    quote: "내 키를 땅에서부터 재면 누구보다 작아도,\n하늘로부터 재면 누구보다 크다.",
    author: "- 나폴레옹(Napoleon) -",
},
{
    quote: "유레카!",
    author: "- 아르키메데스(Archimedes) -",
},
{
    quote: "대부분의 사람은 마음 먹은 만큼 행복하다.",
    author: "- 에이브러햄 링컨(Abraham Lincoln) -",
},
{
    quote: "허물이 있다면, 버리기를 두려워말라.",
    author: "- 공자(Confucius) -",
},
{
    quote: "친구는 제 2의 자신이다.",
    author: "- 아리스토텔레스(Aristoteles) -",
},
{
    quote: "간단하게 설명할 수 없으면,\n제대로 이해하지 못하는 것이다.",
    author: "- 알버트 아인슈타인(Albert Einstein) -",
},
{
    quote: "자기 혼자 컸다고 생각한 사람은\n어른이 될 자격이 없어.",
    author: "- 짱구는 못말려 中 신형만 -",
},
{
    quote: "내가 왜 오늘만 사는지 아냐?\n남은 인생 중 오늘이 제일 젊으니까!!",
    author: "- 갸오오와 사랑꾼들 中 콧구멍맨 -",
},
{
    quote: "간절히 바라는 마음이 있어야\n마법이 일어날 수 있어.",
    author: "- 신데렐라 中 -",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;