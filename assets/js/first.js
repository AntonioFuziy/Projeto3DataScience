var photo = document.getElementById('photo-background')

function firstImageIn(){
    photo.src = 'assets/img/background.jpg'
    setTimeout('firstImageOut()',7000)
    photo.style.animationName = 'fadeImageIn'
    photo.style.animationDuration = '0.8s'
}

function firstImageOut(){
    setTimeout('secondImageIn()', 800)
    photo.style.animationName = 'fadeImageOut'
    photo.style.animationDuration = '0.8s'
}

function secondImageIn(){
    photo.src = 'assets/img/segunda-imagem.jpg'
    setTimeout('secondImageOut()',7000)
    photo.style.animationName = 'fadeImageIn'
    photo.style.animationDuration = '0.8s'
}

function secondImageOut(){
    setTimeout('thirdImageIn()', 800)
    photo.style.animationName = 'fadeImageOut'
    photo.style.animationDuration = '0.8s'
}

function thirdImageIn(){
    photo.src = 'assets/img/terceira-imagem.jpg'
    setTimeout('thirdImageOut()',7000)
    photo.style.animationName = 'fadeImageIn'
    photo.style.animationDuration = '0.8s'
}

function thirdImageOut(){
    setTimeout('firstImageIn()', 800)
    photo.style.animationName = 'fadeImageOut'
    photo.style.animationDuration = '0.8s'
}

firstImageIn()

var notification = document.getElementById('notification')

function dissapear(){
    notification.style.animationName = 'fadeNotificationOut'
    notification.style.animationDuration = '0.8s'
    notification.style.animationFillMode = 'forwards'
}