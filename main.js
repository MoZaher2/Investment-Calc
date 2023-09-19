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
    span.innerHTML = `Money after ${round.value} round will be: ${x}`;
  }
  e.preventDefault();
});
