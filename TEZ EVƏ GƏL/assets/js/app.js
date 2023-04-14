let man = document.querySelector('.man')
let up = document.querySelector('#up')
let down = document.querySelector('#down')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let newgame = document.querySelector('#newgame')
let button = document.querySelector('#button')
let punish = document.querySelector('.punish')
let xdistance = 0
let ydistance = 0

up.onclick = () => {
    if(ydistance > 0 && ydistance <= 75) {
        ydistance -= 2
        man.style.top = `${ydistance}%`
        man.style.transform = `rotate(-90deg)`
    }
}

let Up = () => up.onclick()

down.onclick = () => {
    if(ydistance > -3 && ydistance < 70) {
        ydistance += 2
        man.style.top = `${ydistance}%`
        man.style.transform = `rotate(90deg)`
    }
}

let Down = () => down.onclick()

left.onclick = () => {
    if(xdistance > 3 && xdistance < 91) {
        xdistance -= 2
        man.style.left = `${xdistance}%`
        man.style.transform = `rotateY(180deg)`
    }
}

let Left = () => left.onclick()

right.onclick = () => {
    if(xdistance >= 0 && xdistance < 87) {
        xdistance += 2
        man.style.left = `${xdistance}%`
        man.style.transform = `rotate(0)`
    }
}

let Right = () => right.onclick()

document.addEventListener('keydown', function(e) {
    if(e.code === 'ArrowUp') {
        Up()
        up.classList.add('hover')
    }
    else if(e.code === 'ArrowDown') {
        Down()
        down.classList.add('hover')
    }
    else if(e.code === 'ArrowLeft') {
        Left()
        left.classList.add('hover')
    }
    else if(e.code === 'ArrowRight') {
        Right()
        right.classList.add('hover')
    }
})

document.addEventListener('keyup', function(e) {
    if(e.code === 'ArrowUp') {
        up.classList.remove('hover')
    }
    else if(e.code === 'ArrowDown') {
        down.classList.remove('hover')
    }
    else if(e.code === 'ArrowLeft') {
        left.classList.remove('hover')
    }
    else if(e.code === 'ArrowRight') {
        right.classList.remove('hover')
    }
})

let BorderControl = () => {
    if(xdistance >= 81 && ydistance >= 65) {
        man.style.display = 'none'
        newgame.style.display = 'block'
        punish.style.display = 'block'
        button.onclick = () => location.reload()
    }
}

setInterval(() => {
    BorderControl()
}, 1);

function Speak() {
    const utterThis = new SpeechSynthesisUtterance('Tez eveee geeel')

    utterThis.volume = 1
    utterThis.rate = 0.8
    utterThis.pitch = 0.8

    speechSynthesis.speak(utterThis)
}

setInterval(() => {
    Speak()
}, 3000);