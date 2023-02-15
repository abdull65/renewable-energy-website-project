// now = new Date();
// hour = now.getHours();
// mins = now.getMinutes();
// secs = now.getSeconds();
// localtime = now.toString();
// let dateEl = document.querySelector('.date_icon_text');
// dateEl.textContent = localtime
//  dateEl.textContent = hour + mins + secs;

const readMoreBtn = document.querySelectorAll('.read-more');
const hiddenContent = document.querySelectorAll('.service-typedtext');
console.log(hiddenContent)
function showContent() {
 if(hiddenContent.classList.contains('read-more')) {
  hiddenContent.classList.remove('read-more')
 } else {
  hiddenContent.classList.add('read-more')
 }
}
readMoreBtn.addEventListener('click', showContent())