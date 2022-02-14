

const sections = document.querySelectorAll('.anim')
const svgText = document.querySelector('#textPath')
const arrowRight = document.querySelector('.slideRight')
const arrowLeft = document.querySelector('.slideLeft')
const leftcol = document.querySelector('.left')
const image = document.querySelector('.image')
function scroll(offset) {
    svgText.setAttribute('startOffset', offset)
}
function onScroll() {
    requestAnimationFrame(() => {
        scroll(window.scrollY * 2)
    })
}
arrowRight.addEventListener('click', () => {
    var imageWidth = image.offsetWidth
    var leftcolWidth = leftcol.style.marginLeft
    var newWidth;

    if (leftcolWidth == '') {
        newWidth = imageWidth
        leftcol.style.marginLeft = `-${newWidth}px`
        arrowLeft.classList.remove('disabled')
    }
    else {
        if (parseInt(leftcolWidth) > (-1 * imageWidth))
            arrowLeft.classList.remove('disabled')
        if (parseInt(leftcolWidth) > (-5 * imageWidth)) {
            console.log(imageWidth)
            newWidth = imageWidth - parseInt(leftcolWidth)
            leftcol.style.marginLeft = `-${newWidth}px`
            arrowLeft.classList.remove('disabled')
            console.log('hi')
        }
        if (parseInt(leftcolWidth) == (-4 * imageWidth)) {
            arrowRight.classList.add('disabled')
        }
        if (parseInt(leftcolWidth) < -imageWidth) {
            arrowLeft.classList.remove('disabled')
        }
    }

    if (parseInt(leftcolWidth) > (-4 * imageWidth)) {
        arrowRight.classList.remove('disabled')
    }

})
arrowLeft.addEventListener('click', () => {
    var imageWidth = image.offsetWidth
    var leftcolWidth = leftcol.style.marginLeft
    var newWidth;
    newWidth = imageWidth + parseInt(leftcolWidth)
    if (parseInt(leftcolWidth) > (-6 * imageWidth))
        arrowRight.classList.remove('disabled')
    if (leftcolWidth != '0px') {
        leftcol.style.marginLeft = `${newWidth}px`
        console.log(imageWidth)
    }

    if (leftcolWidth == `-${imageWidth}px`)
        arrowLeft.classList.add('disabled')




})
const menutoggle = document.querySelector(".bars")
const bars = document.getElementsByClassName("bar")
const menu = document.querySelector(".menu")
const animating = document.querySelectorAll('.anim')
menutoggle.addEventListener("click", () => {
    Array.from(bars).forEach(e => {
        e.classList.toggle("active")

    })
    menu.classList.toggle("active")
})
window.addEventListener('scroll', onScroll)
observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add('ani')
        }
        else {
            entry.target.classList.remove('ani')
        }

    })

    animating.forEach((e) => {
        observer.observe(e)
    })


})
