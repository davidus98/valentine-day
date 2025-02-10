function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

const yesBtn = document.querySelector(".yes");
const noBtn = document.getElementById("noBtn");
const valentineImage = document.getElementById("valentineImage");
const question = document.getElementById("question");
const buttons = document.querySelector(".buttons");

noBtn.addEventListener("click", () => {
  valentineImage.src = "./public/img2.jpeg";

  noBtn.style.transform = `scale(${
    parseFloat(
      noBtn.style.transform.replace("scale(", "").replace(")", "") || 1
    ) - 0.1
  })`;

  yesBtn.style.transform = `scale(${
    parseFloat(
      yesBtn.style.transform.replace("scale(", "").replace(")", "") || 1
    ) + 1
  })`;
});

yesBtn.addEventListener("click", () => {
  valentineImage.src = "./public/img3.jpeg";
  thankYouMessage.style.display = "block";
  question.style.display = "none";
  buttons.style.display = "none";

  createConfetti();
});

function createConfetti() {
  const colors = [
    "#ff4d6d",
    "#ffbb33",
    "#33ff77",
    "#66b3ff",
    "#ff66cc",
    "#ff9966",
    "#ff3399",
    "#33ccff",
    "#ff6633",
  ];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = randomColor;

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 2 + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}
