let destinationSlider = Array.from(document.querySelectorAll('.planet-description-container'))
let moonButton = document.querySelectorAll('.moon')
let marsButton = document.querySelectorAll('.mars')
let europaButton = document.querySelectorAll('.europa')
let titanButton = document.querySelectorAll('.titan')
const mediaSize = window.matchMedia('(max-width:800px)')
const mediaSizePhone = window.matchMedia('(max-width:375px)')
const toggleMenu = document.querySelector('.wrapper')
const hideMenu = document.querySelector('.open')
const header = document.querySelector('header')
moonButton.forEach(el => el.addEventListener('click',changeSlideToMoon))
marsButton.forEach(el => el.addEventListener('click',changeSlideToMars) )
europaButton.forEach(el => el.addEventListener('click',changeSlideToEuropa))
titanButton.forEach(el => el.addEventListener('click',changeSlideToTitan))


toggleMenu.addEventListener('click', ()=>{
    if(mediaSizePhone.matches){
        header.style.right="0"
    }
})
hideMenu.addEventListener('click', (event)=>{
    if(mediaSizePhone.matches){
        event.stopPropagation()
        header.style.right ='-80%'
    }
})

function changeSlideToMoon(){
    const currentSlide = document.querySelector('.current-slide')
    const moon = document.querySelector('#moon')
    currentSlide.style.display = "none"
    currentSlide.style.visibility = 'hidden'
    currentSlide.classList.remove('current-slide')
    moon.classList.add('current-slide')
    moon.style.display  = 'block'
    moon.style.visibility = 'visible'

}
function changeSlideToMars(){
    const currentSlide = document.querySelector('.current-slide')
    const mars = document.querySelector('#mars')
    currentSlide.style.display = "none"
    currentSlide.style.visibility = 'hidden'
    currentSlide.classList.remove('current-slide')
    mars.classList.add('current-slide')
    mars.style.display  = 'block'
    mars.style.visibility = 'visible'
}
function changeSlideToEuropa(){
    const currentSlide = document.querySelector('.current-slide')
    const europa = document.querySelector('#europa')
    currentSlide.style.display = "none"
    currentSlide.style.visibility = 'hidden'
    currentSlide.classList.remove('current-slide')
    europa.classList.add('current-slide')
    europa.style.display  = 'block'
    europa.style.visibility = 'visible'
}
function changeSlideToTitan(){
    const currentSlide = document.querySelector('.current-slide')
    const titan = document.querySelector('#titan')
    currentSlide.style.display = "none"
    currentSlide.style.visibility = 'hidden'
    currentSlide.classList.remove('current-slide')
    titan.classList.add('current-slide')
    titan.style.display  = 'block'
    titan.style.visibility = 'visible'
}


/* start: script for crew page */
const styleArray = [
    'url("file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/crew/image-douglas-hurley.png") no-repeat bottom center',
    'url("file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/crew/image-mark-shuttleworth.png") no-repeat bottom center',
    'url("file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/crew/image-victor-glover.png") no-repeat bottom center',
    'url("file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/crew/image-anousheh-ansari.png") no-repeat bottom center'
]

const track = document.querySelectorAll('.carousel-track')
const slides = Array.from(track)
const dotsNav = document.querySelector('.slide-nav')
const dots = Array.from(dotsNav.children)
const pictures = document.querySelector('.crew-pictures')
const images = Array.from(document.querySelector('.crew-pictures').children)

function changeSlide(event){
    for(let i =0; i < slides.length;i++){
        let obj = event.target
        let nowSlide = Array.from(document.querySelectorAll('.now-slide'))
        nowSlide.forEach(el => el.classList.remove('now-slide'))
        obj.classList.add('now-slide')
        Array.from(slides[i].children)[dots.indexOf(obj)].classList.add('now-slide')
        pictures.style.background = styleArray[dots.indexOf(obj)]
        if(mediaSize.matches){pictures.style.backgroundPosition = 'top center'}
        if(mediaSizePhone.matches){pictures.style.backgroundSize = 'contain'}
        const newNowSlide = document.querySelector('.now-slide')
        const nowSlideIndex = Array.from(slides[i].children).indexOf(newNowSlide)
        newNowSlide.style.left = 0
        Array.from(slides[i].children).forEach((el,index) => {
            if(index < nowSlideIndex){
                el.style.left = -width(el) * (nowSlideIndex-index) +'px'
            }
            else if(index > nowSlideIndex){
                el.style.left = width(el) * (index-nowSlideIndex) +'px'
            }    
        })
    }
}



const width = function(obj){
    return obj.getBoundingClientRect().width
}
for(let i=0 ;i<slides.length;i++){
    Array.from(slides[i].children).forEach((el,index)=>{
        //setting the slides to be adjacent to each other
        el.style.left = width(el) * index + 'px'
    })
}

dots.forEach(el => el.addEventListener('click',changeSlide ))
if (mediaSize.matches){
    const pictureFiles = [
        'url(file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/technology/image-launch-vehicle-landscape.jpg)',
        'url(file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/technology/image-launch-spaceport-landscape.jpg)',
        'url(file:///C:/Users/Others/Desktop/html%20and%20css%20projects/space-tourism-landing-page/images/technology/image-space-capsule-landscape.jpg)'
    ]
    images.forEach((el,index) => el.style.content = pictureFiles[index])
}
































/* End: script for crew page */


