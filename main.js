// now = new Date();
// hour = now.getHours();
// mins = now.getMinutes();
// secs = now.getSeconds();
// localtime = now.toString();
// let dateEl = document.querySelector('.date_icon_text');
// dateEl.textContent = localtime
//  dateEl.textContent = hour + mins + secs;

function showText() {
  const readMoreBtn = document.querySelectorAll(".read-more");
  const text = document.querySelectorAll(".service-typedtext");
  const hideText = text.substring(0, 50);
  text.innerHTML = hideText;
  for (let i = 0; i < readMoreBtn.length; i++) {
    readMoreBtn[i].addEventListener("click", showText);
  }
}
