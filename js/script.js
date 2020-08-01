$("#inner-wheel").superWheel({
  slices: [
    {
      text: `<img src="images/3_usd.png" alt="1" />`,
      value: 1,
      message: "You win 20% off",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd.png",
    },
    {
      text: `<img src="images/8.png" alt="2" />`,
      value: 0,
      message: "You have No luck today",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_1.png",
    },
    {
      text: `<img src="images/1.png" alt="3" />`,
      value: 1,
      message: "You win 30% off",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_2.png",
    },
    {
      text: `<img src="images/6.png" alt="4" />`,
      value: 0,
      message: "You Lose :(",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_3.png",
    },
    {
      text: `<img src="images/7_usd.png" alt="5" />`,
      value: 1,
      message: "You win 40% off",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_4.png",
    },
    {
      text: `<img src="images/4.png" alt="6" />`,
      value: 0,
      message: "You get Nothing :(",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_5.png",
    },
    {
      text: `<img src="images/5_usd.png" alt="7" />`,
      value: "Slice Value 6",
      message: "Message 6",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_6.png",
    },
    {
      text: `<img src="images/6.png" alt="8" />`,
      value: "Slice Value 7",
      message: "Message 7",
      background: "transparent",
      color: "#fff",
      path: "Bonus_Wheel_usd_7.png",
    },
  ],
  width: 800,
  duration: 10000,
  rotates: 3,
  frame: 1,
  type: "spin",
  text: {
    color: "#ccc",
    size: 14,
    offset: 8,
    arc: false,
  },
  line: {
    width: 0,
    color: "#939393",
  },
  outer: {
    width: 0,
    color: "#939393",
  },
  inner: {
    width: 0,
    color: "#939393",
  },
  center: {
    rotate: false,
    html: {
      template: `<div id="spin" style=" transform: translate(-50%, -50%); width: 50%"><img src="images/spin.png" alt="Spin" /><span class="btn-text">spin to win</span></div>`,
      width: 90,
    },
  },
  marker: {
    animate: "true",
  },
});

document.querySelector(".btn-text").classList.add("spinning");
document.querySelector(".sWheel-wrapper").classList.add("spinning-wheel");

$(document).on("click", "#spin", function (e) {
  $(".superwheel").superWheel("start", 0);
});

$("#inner-wheel").superWheel("onStart", function (results, spinCount, now) {
  console.log(results);
  // document.querySelector("#pointer img").classList.add("startSpin");
  const pointer = document.querySelector("#pointer");
  pointer.classList.add("rtt");
  document.querySelector(".btn-text").classList.remove("spinning");
});

$("#inner-wheel").superWheel("onStep", function (
  results,
  slicePercent,
  circlePercent
) {
  const audio = new Audio("superwheel/dist/tick.mp3");
  audio.play();

  // const pointer = document.querySelector("#pointer img");
  // pointer.classList.add("rtt");
  // setTimeout(() => {
  //   pointer.classList.remove("rtt");
  // }, 200);
});

$("#inner-wheel").superWheel("onComplete", function (results, spinCount, now) {
  const coins = document.querySelector(".coins");
  const winImg = document.querySelector(".img");

  const imgCoins = document.createElement("img");
  imgCoins.src = "images/coins.gif";
  coins.appendChild(imgCoins);

  const _winImg = document.createElement("img");
  _winImg.src = `images/${results.path}`;
  winImg.appendChild(_winImg);

  winImg.classList.add("show");
  document.querySelector("#pointer img").classList.remove("startSpin");
  document.querySelector(".btn-text").classList.add("spinning");
});
