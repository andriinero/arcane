const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const handleNoClick = (e) => {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  const randomWidth = (Math.random() * maxWidth) / 2;
  const randomHeight = (Math.random() * maxHeight) / 2;

  noButton.style.position = "absolute";
  noButton.style.top = `${randomHeight}px`;
  noButton.style.left = `${randomWidth}px`;
};

const handleYesClick = (e) => {
  const inputGroup = document.querySelector(".input-group");

  inputGroup.innerHTML = "";

  const link = document.createElement("a");
  link.id = "watch-arcane";
  link.href = "https://www.netflix.com/search?q=arcane&jbv=81435684";
  link.textContent = "I am a link. Click me :)";

  inputGroup.appendChild(link);
};

yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);
