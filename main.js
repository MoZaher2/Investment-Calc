let form = document.querySelector('[id="calc"]');
let money = document.querySelector('[id="money"]');
let round = document.querySelector('[id="round"]');
let span = document.querySelector('[id="val"]');
form.addEventListener("submit", (e) => {
  if (money.value != "" && round.value != "") {
    let x = money.value;
    for (let i = 0; i < round.value; i++) {
      x = +x + x * 0.05;
    }
    x = x.toFixed(2);
    span.innerHTML = `Money after ${round.value} round will be: ${x}$ `;
  }
  e.preventDefault();
});
// Calc Time
let form2 = document.querySelector('[class="formtime"]');
let time = document.querySelector('[id="time"]');
let spanTime = document.querySelector('[id="valtime"]');
form2.addEventListener("submit", (ele) => {
  if (time.value != "") {
    let h = Math.trunc(+time.value / 60);
    let day = Math.trunc(+h / 24);
    let hour = +h % 24;
    let minute = +time.value % 60;
    spanTime.innerHTML = `Round will be ended after ( ${day} Days : ${hour} Hours : ${minute} Minutes )`;
  }
  ele.preventDefault();
});
