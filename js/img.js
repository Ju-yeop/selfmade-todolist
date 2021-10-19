const locat = document.querySelector("#back");

const imglist = ['beach', 'forest', 'lake', 'meteor_shower'];
const imag = document.createElement("img");

imag.src = `../img/${imglist[Math.floor(Math.random()*imglist.length)]}.jpg`;
imag.className = "background";
locat.appendChild(imag);

