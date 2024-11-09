let noCounter = 0;

const yesLink = document.getElementById("yes");
const noLink = document.getElementById("no");

const handleNoClick = (e) => {
  const arcaneHeader = document.getElementById("arcane-header");

  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;
  const randomWidth = (Math.random() * maxWidth) / 2;
  const randomHeight = (Math.random() * maxHeight) / 2;

  noLink.style.position = "absolute";
  noLink.style.top = `${randomHeight}px`;
  noLink.style.left = `${randomWidth}px`;

  noCounter += 1;

  if (noCounter === 2) arcaneHeader.textContent = "Hold on a sec";
  if (noCounter === 5) arcaneHeader.textContent = "Let's trade!";
  if (noCounter === 10)
    arcaneHeader.textContent =
      "I could watch 1 episode of You for every episode of Arcane you watch 😂";
  if (noCounter === 15) {
    arcaneHeader.textContent = "Aight. You win.";
    noLink.classList.remove("pulse");
  }
  if (noCounter === 16)
    noLink.href = "https://www.netflix.com/search?q=arcane&jbv=81435684";
};

const handleYesClick = (e) => {
  const arcaneLink = document.createElement("a");
  arcaneLink.id = "watch-arcane";
  arcaneLink.href = "https://www.netflix.com/search?q=arcane&jbv=81435684";
  arcaneLink.textContent = "I am a link. Click me :)";

  const inputGroup = document.querySelector(".input-group");
  inputGroup.innerHTML = "";
  inputGroup.appendChild(arcaneLink);
};

yesLink.addEventListener("click", handleYesClick);
noLink.addEventListener("click", handleNoClick);
