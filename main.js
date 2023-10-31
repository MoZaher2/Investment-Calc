// localStorage.clear();
// Member
let users = document.querySelector(`[class="users"]`);
let usersComplete = document.querySelector(`[class="usersComplete"]`);
let addBtn = document.getElementById("addbtn");
let cancelBtn = document.querySelector(`[value="Cancel"]`);
let addRound = document.getElementById("add");
let addForm = document.querySelector(`[class="add-member"]`);
//Form Content
let userName = document.getElementById("add-name");
let roundTime = document.getElementById("add-time");
let roundMoney = document.getElementById("add-money");
if (!localStorage.UsersComplete) {
  localStorage.UsersComplete = JSON.stringify([]);
} else {
  ReDone();
}
if (!localStorage.Users) {
  localStorage.Users = JSON.stringify([]);
} else {
   let intcount = setInterval(() => {
    users.innerHTML = "";
    let arr = JSON.parse(localStorage.Users);
    arr.sort((a, b) => a.roundTime - b.roundTime);
    for (let i = 0; i < arr.length; i++) {
      AddUser(arr[i].userName, arr[i].roundMoney, arr[i].roundTime, arr[i].ID);
    }
   }, 1000);
}
if (!localStorage.ID) {
  localStorage.ID = 0;
}
//
let Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//
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
let spanFday = document.querySelector('[id="Fday"]');
form2.addEventListener("submit", (ele) => {
  if (time.value != "") {
    let h = Math.trunc(+time.value / 60);
    let day = Math.trunc(+h / 24);
    let hour = +h % 24;
    let minute = +time.value % 60;
    spanTime.innerHTML = `Round will be ended after ( ${day} Days : ${hour} Hours : ${minute} Minutes )`;
    // FDay
    let newD = new Date();
    newD = newD.setMinutes(time.value);
    let Fday = new Date(newD);
    if (Fday.getHours() > 12)
      spanFday.innerHTML = `${+Fday.getHours() - 12} PM  [${
        days[Fday.getDay()]
      }]   ::${Fday.getDate()} ${
        Months[Fday.getMonth()]
      } ${Fday.getFullYear()}::`;
    else
      spanFday.innerHTML = `${+Fday.getHours()} AM  [${
        days[Fday.getDay()]
      }]   ::${Fday.getDate()} ${
        Months[Fday.getMonth()]
      } ${Fday.getFullYear()}::`;
  }
  ele.preventDefault();
});

// Events
addBtn.addEventListener("click", () => {
  addForm.style.display = "flex";
});
cancelBtn.addEventListener("click", () => {
  addForm.style.display = "none";
});
addRound.addEventListener("click", (ele) => {
  if (userName.value != "" && roundTime.value != "" && roundMoney.value != "") {
    // Add User
    let xT = new Date().getTime();
    let Ftime = (+roundTime.value * 60 * 1000 + xT);
    AddUser(userName.value, roundMoney.value, Ftime, localStorage.ID);
    let Atemp = JSON.parse(localStorage.Users);
    Atemp.push({
      userName: userName.value,
      roundMoney: roundMoney.value,
      roundTime: Ftime,
      ID: localStorage.ID,
    });
    localStorage.Users = JSON.stringify(Atemp);
    localStorage.ID = +localStorage.ID + 1;
    userName.value = "";
    roundTime.value = "";
    roundMoney.value = "";
    addForm.style.display = "none";
  }
  ele.preventDefault();
});

function AddUser(Name, Money, Time, ID) {
  let userDiv = document.createElement("div");
  userDiv.setAttribute("class", "user");
  userDiv.setAttribute("id", `user-${ID}`);
  let userInfoName = document.createElement("p");
  let userInfoMoney = document.createElement("p");
  userInfoName.setAttribute("class", "user-info");
  userInfoMoney.setAttribute("class", "user-info");
  userInfoName.innerHTML = `Name: ${Name}`;
  userInfoMoney.innerHTML = `Money back: ${(+Money + Money * 0.05).toFixed(2)}$`;
  userDiv.appendChild(userInfoName);
  userDiv.appendChild(userInfoMoney);
  // Time
  let ctimeDiv = document.createElement("div");
  ctimeDiv.setAttribute("class", "ctime");

  // Days
  let daysDiv = document.createElement("div");
  daysDiv.setAttribute("class", "Seconds");
  let daysP = document.createElement("p");
  let daystxt = document.createElement("p");
  daysP.setAttribute("class", "num");
  daystxt.setAttribute("class", "txt");
  daystxt.innerHTML = "Days";
  daysDiv.appendChild(daysP);
  daysDiv.appendChild(daystxt);
  ctimeDiv.appendChild(daysDiv);
  // Hours
  let hoursDiv = document.createElement("div");
  hoursDiv.setAttribute("class", "Hours");
  let hoursP = document.createElement("p");
  let hourstxt = document.createElement("p");
  hoursP.setAttribute("class", "num");
  hourstxt.setAttribute("class", "txt");
  hourstxt.innerHTML = "Hours";
  hoursDiv.appendChild(hoursP);
  hoursDiv.appendChild(hourstxt);
  ctimeDiv.appendChild(hoursDiv);
  // Minuets
  let minutesDiv = document.createElement("div");
  minutesDiv.setAttribute("class", "Minutes");
  let minutesP = document.createElement("p");
  let minutestxt = document.createElement("p");
  minutesP.setAttribute("class", "num");
  minutestxt.setAttribute("class", "txt");
  minutestxt.innerHTML = "Minutes";
  minutesDiv.appendChild(minutesP);
  minutesDiv.appendChild(minutestxt);
  ctimeDiv.appendChild(minutesDiv);
  //Seconds
  let secondsDiv = document.createElement("div");
  secondsDiv.setAttribute("class", "Seconds");
  let secondsP = document.createElement("p");
  let secondstxt = document.createElement("p");
  secondsP.setAttribute("class", "num");
  secondstxt.setAttribute("class", "txt");
  secondstxt.innerHTML = "Seconds";
  secondsDiv.appendChild(secondsP);
  secondsDiv.appendChild(secondstxt);
  ctimeDiv.appendChild(secondsDiv);

  userDiv.appendChild(ctimeDiv);
  users.appendChild(userDiv);
  let dateNow = new Date().getTime();
  let dateDiff = +Time - dateNow - 21600000;

  let DaysT = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let HoursT = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let MinutesT = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let SecondsT = Math.floor((dateDiff % (1000 * 60)) / 1000);
  daysP.innerHTML = DaysT;
  hoursP.innerHTML = HoursT;
  minutesP.innerHTML = MinutesT;
  secondsP.innerHTML = SecondsT;
  if (dateDiff <= 0) {
    let darray = JSON.parse(localStorage.Users);
    darray = darray.filter((ele) => {
      if (ele.ID == ID) {
        let carray = JSON.parse(localStorage.UsersComplete);
        carray.push({
          userName: Name,
          BackMoney: Money,
          ID: ID,
        });
        localStorage.UsersComplete = JSON.stringify(carray);
        ReDone();
      }
      return ele.ID != ID;
    });
    localStorage.Users = JSON.stringify(darray);
  }
}
function AddUserCompleted(Name, Money, ID) {
  let userDiv = document.createElement("div");
  userDiv.setAttribute("class", "user");
  userDiv.setAttribute("id", `user-${ID}`);
  let userInfoName = document.createElement("p");
  let userInfoMoney = document.createElement("p");
  userInfoName.setAttribute("class", "user-info");
  userInfoMoney.setAttribute("class", "user-info");
  userInfoName.innerHTML = `Name: ${Name}`;
  userInfoMoney.innerHTML = `Money back: ${(+Money + Money * 0.05).toFixed(2)}$`;
  userDiv.appendChild(userInfoName);
  userDiv.appendChild(userInfoMoney);
  //
  let finishDiv = document.createElement("div");
  finishDiv.setAttribute("class", "finish");
  let finishTxt = document.createElement("p");
  finishTxt.setAttribute("class", "finishtxt");
  finishTxt.innerHTML = "The round complete";
  let delUser = document.createElement("button");
  delUser.setAttribute("class", "deluser");
  delUser.innerHTML = "Delete";
  delUser.addEventListener("click", (ele) => {
    let rarray = JSON.parse(localStorage.UsersComplete);
    q = ele.target.parentElement.parentElement.getAttribute("id");
    rarray = rarray.filter((ele) => {
      return `user-${ele.ID}` != q;
    });
    localStorage.UsersComplete = JSON.stringify(rarray);
    console.log(rarray);
    ele.target.parentElement.parentElement.remove();
  });
  finishDiv.appendChild(finishTxt);
  finishDiv.appendChild(delUser);
  userDiv.appendChild(finishDiv);
  usersComplete.appendChild(userDiv);
}

function ReDone() {
  usersComplete.innerHTML = "";
  let arrComplete = JSON.parse(localStorage.UsersComplete);
  for (let i = 0; i < arrComplete.length; i++) {
    AddUserCompleted(
      arrComplete[i].userName,
      arrComplete[i].BackMoney,
      arrComplete[i].ID
    );
  }
}
