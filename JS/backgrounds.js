const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
const todayImage = images[Math.floor(Math.random()*images.length)];
const background = document.querySelector("#container");

background.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("IMG/${todayImage}")`;