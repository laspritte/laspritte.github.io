const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const todayImage = images[Math.floor(Math.random()*images.length)]

const image = document.createElement("img");
image.src = `./IMG/${todayImage}`;

document.body.appendChild(image)