const time = document.getElementById('time')
const setTime = document.getElementById('setTime')
const start = document.getElementById('start')
const minutes = document.querySelectorAll('.minute')
const seconds = document.querySelectorAll('.second')
const secSelector = document.getElementById('theSeconds')
const minSelector = document.getElementById('minutes')
let secondNum;


//Give select options a value
let initMin = -1
let initSec = -1
minutes.forEach(minute => {
    initMin++;
    minute.innerText = initMin;
})
seconds.forEach(second => {
    initSec++;
    second.innerText = initSec;
})





//Timer functionality
const runTimer = () => {
    //set input value as initial timer value
    secondNum = parseInt(secSelector.value) + (parseInt(minSelector.value) * 60);

    //If no input value
    if(secondNum == ''){
        alert('Please enter valid time')
    }else{

    //Run timer
    const countDown = setInterval(() => {
    secondNum--;
        showTime(secondNum)
        if(secondNum <= 0){
            clearInterval(countDown);
        }
        }, 1000);
        const showTime = (second) => {
            const min = Math.floor(second / 60)
            const sec = Math.floor(second % 60)

            time.innerHTML =`${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
        }
    }
}

//start timer
start.addEventListener('click', runTimer)
