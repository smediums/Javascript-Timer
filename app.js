const btn = document.getElementById('changeClr')
const hex = document.getElementById('hexCode')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8)
    body.style.background = color
    hex.innerText = color;
})