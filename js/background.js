const images = ["0.jpg", "1.png", "2.jpg"];
const rImages = [{
    god:"hades.png",
    message: "- 저승의 왕(Hades) - \n죽음으로부터 안전할 거에요..^^",
},
{
    god:"zeus.png",
    message:"- 올림푸스의 왕(Zeus) - \n벼락 맞을 일은 없겠네요!",
},
{
    god:"poseidon.png",
    message:"- 바다의 신(Poseidon) -\n낚시하기 좋은 날이네요.",
},
{
    god:"artemis.png",
    message:"- 사냥의 여신(Artemis) -\nFPS 게임 한 판 어때요?",
},
{
    god:"athena.png",
    message:"- 지혜의 여신(Athena) -\n책 한 권 읽기 좋은 날이에요.",
},
{
    god:"Aphrodite.png",
    message:"- 사랑과 미의 여신(Aphrodite) -\n좋아하는 누군가에게 말해보아요!",
},
{
    god:"Ares.png",
    message:"- 전쟁의 신(Ares) -\n대결 내기를 해도 좋겠네요!",
},
{
    god:"Hermes.png",
    message:"- 신속의 신(Hermes) -\n칼퇴의 기운이 보이네요!",
},
{
    god:"Dionysus.png",
    message:"- 술의 신(Dionysus) -\n오늘은 마셔도 되는 날!",
},
{
    god:"Demeter.png",
    message:"- 계절의 여신(Demeter) -\n산책하기 정말 좋은 날이에요.",
},
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const god = document.querySelector(".god__img img");
const message = document.querySelector(".god span");

const rChosenImage = rImages[Math.floor(Math.random() * rImages.length)];

const BACKGROUND = "background";

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(BACKGROUND);

god.src = `img/${rChosenImage.god}`
message.innerText = rChosenImage.message;

document.body.appendChild(bgImage);