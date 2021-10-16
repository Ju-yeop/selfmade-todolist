const clock = document.querySelector("#clock");

function setclock(){
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clock.innerText = `${hour}:${minute}:${second}`;
}

setclock();
setInterval(setclock,1000);

