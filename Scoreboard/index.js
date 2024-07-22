let scoreH = document.getElementById("score-h")
let scoreG = document.getElementById("score-g")

let scoreh = 0
let scoreg = 0

function oneh() {
    scoreh += 1
    scoreH.textContent = scoreh
    
}

function twoh() {
    scoreh += 2
    scoreH.textContent = scoreh
    
}

function threeh() {
    scoreh += 3
    scoreH.textContent = scoreh
    
}

function oneg() {
    scoreg += 1
    scoreG.textContent = scoreg
    
}

function twog() {
    scoreg += 2
    scoreG.textContent = scoreg
    
}

function threeg() {
    scoreg += 3
    scoreG.textContent = scoreg
    
}